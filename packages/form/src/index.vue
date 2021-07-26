<!--
 * @Description: form组件封装
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-03-08 10:16:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:51:26
-->
<template>
  <div class="bi-form">
    <div v-for="(item, i) in formList" :key="i" class="m-main">
      <div v-if="item.type === 'select'" class="n-content t-select">
        <div class="t-label">
          <span>{{ item.label }}</span>
        </div>
        <div :class="['t-type', item.isError ? 't-type-active' : '']">
          <el-select
            v-model="item.value"
            :placeholder="item.placeholder"
            @change="changeForm(item)"
            :disabled="item.disabled"
          >
            <el-option
              v-for="item in item.data"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="t-checked">
          <span v-show="item.checked" class="t-error">*</span>
        </div>
      </div>
      <div v-else-if="item.type === 'time'" class="n-content t-time">
        <div class="t-label">
          <span>{{ item.label }}</span>
        </div>
        <div :class="['t-type', item.isError ? 't-type-active' : '']">
          <el-date-picker
            v-model="item.value"
            type="date"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            @change="changeForm(item)"
            :picker-options="pickerOptions"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          >
          </el-date-picker>
        </div>
        <div class="t-checked">
          <span v-show="item.checked" class="t-error">*</span>
        </div>
      </div>
      <div v-else-if="item.type === 'radio'" class="n-content t-radio">
        <div class="t-label">
          <span>{{ item.label }}</span>
        </div>
        <div :class="['t-type', item.isError ? 't-type-active' : '']">
          <el-radio v-model="item.value" :label="true" :disabled="item.disabled"
            >男</el-radio
          >
          <el-radio
            v-model="item.value"
            :label="false"
            :disabled="item.disabled"
            >女</el-radio
          >
        </div>
        <div class="t-checked">
          <span v-show="item.checked" class="t-error">*</span>
        </div>
      </div>
      <div v-else-if="item.type === 'checkbox'">
        <div class="t-label">
          <span>{{ item.label }}</span>
        </div>
        <div :class="['t-type', item.isError ? 't-type-active' : '']">
          <el-switch
            v-model="item.value"
            :disabled="item.disabled"
            active-color="#005bfa"
            inactive-color="#dcdfe6"
            active-value="true"
            inactive-value="false"
          >
          </el-switch>
        </div>
        <div class="t-checked">
          <span v-show="item.checked" class="t-error">*</span>
        </div>
      </div>
      <!-- Cascader  -->
      <div v-else-if="item.type === 'cascader'" class="n-content t-cascader">
        <div class="t-label">
          <span>{{ item.label }}</span>
        </div>
        <div :class="['t-type', item.isError ? 't-type-active' : '']">
          <el-cascader
            v-model="item.value"
            :options="item.data"
            @change="changeForm(item)"
          ></el-cascader>
        </div>
        <div class="t-checked">
          <span v-show="item.checked" class="t-error">*</span>
        </div>
      </div>
      <div v-else-if="item.type === 'number'" class="n-content t-number">
        <div class="t-label">
          <span>{{ item.label }}</span>
        </div>
        <div :class="['t-type', item.isError ? 't-type-active' : '']">
          <el-input-number
            v-model="item.value"
            :min="0"
            :disabled="item.disabled"
          ></el-input-number>
        </div>
        <div class="t-checked">
          <span v-show="item.checked" class="t-error">*</span>
        </div>
      </div>
      <div v-else class="n-content t-input">
        <div class="t-label">
          <span>{{ item.label }}</span>
        </div>
        <div :class="['t-type', item.isError ? 't-type-active' : '']">
          <el-input
            v-model="item.value"
            :placeholder="item.placeholder"
            @input="changeForm(item)"
            :disabled="item.disabled"
          >
            <template slot="append" v-if="item.append">{{
              item.append
            }}</template>
          </el-input>
        </div>
        <div class="t-checked">
          <span v-show="item.checked" class="t-error">*</span>
        </div>
      </div>
    </div>
    <div v-show="error" class="t-error-content">
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script>
/* 该组件仅支持一般场景，对于复杂场景建议定制使用。 */
export default {
  name: "BForm",
  props: {
    formParams: {
      type: Object,
      default: null,
    },
    formList: {
      type: Array,
      default: () => [
        {
          label: "账号", // 左侧展示字段
          prop: "account", // 字段
          value: "", // 输入值
          showLabel: true, // 是否展示左侧label
          placeholder: "请输入账号", // 提示语
          length: 20, // 可忽略，input可以使用，默认20
          type: "input", // 类型
          checked: false, // 是否校验
          append: "", // 单位
          disabled: true, // 是否禁用
          isError: false, // 输入框异常
          data: [], // 有则展示，无则不用
        },
        {
          label: "体重",
          prop: "weight",
          value: "",
          showLabel: true,
          placeholder: "请输入体重",
          length: 20,
          type: "input",
          append: "KG",
          checked: true,
          isError: false,
          data: [],
        },
        {
          label: "学校地址",
          prop: "shoolId",
          value: "",
          showLabel: true,
          placeholder: "请选择学校地址",
          length: 20,
          type: "select",
          checked: true,
          isError: false,
          data: [
            {
              label: "灵璧",
              value: 1,
            },
            { label: "邱庙", value: 2 },
          ],
        },
        {
          label: "出生地",
          prop: "address",
          value: "",
          showLabel: true,
          placeholder: "请选择出生地",
          length: 20,
          type: "cascader",
          checked: true,
          isError: false,
          data: [
            {
              label: "灵璧",
              value: 1,
              children: [{ label: "邱庙", value: 2 }],
            },
            {
              label: "合肥",
              value: 3,
              children: [
                { label: "蜀山区", value: 4 },
                { label: "政务", value: 5 },
              ],
            },
          ],
        },
        {
          label: "出生日期",
          prop: "biithday",
          value: "",
          showLabel: true,
          placeholder: "请输入出生日期",
          length: 20,
          type: "time",
          checked: true,
          isError: false,
          data: [],
        },
        {
          label: "性别",
          prop: "sex",
          value: false,
          showLabel: true,
          placeholder: "选择性别",
          length: 20,
          type: "radio",
          checked: false,
          isError: false,
          data: [],
        },
        {
          label: "排序",
          prop: "sort",
          value: "",
          showLabel: true,
          placeholder: "请输入排序",
          length: 20,
          type: "number",
          checked: false,
          isError: false,
          data: [],
        },
      ],
    },
  },
  data() {
    return {
      error: "",
      pickerOptions: {
        disabledDate(time) {
          let _now = Date.now();

          return time.getTime() > _now;
        },
      },
    };
  },
  watch: {
    formParams(val) {
      this.formList.forEach((item) => {
        if (!val) {
          return (item.value = null);
        }
        item.value = val[item.prop];
      });
    },
  },
  methods: {
    /**
     * @description:校验
     * @param {*}
     * @return {*}
     */
    changeForm(item) {
      if (item.value) {
        this.error = null;
        return (item.isError = false);
      }
      this.error = item.placeholder;
      return (item.isError = true);
    },
    /**
     * @description: 确定校验表单
     * @param {*}
     * @return {*}
     */
    submitForm() {
      /* 先清空再校验 */
      let par = {};

      this.formList.forEach((item) => {
        item.isError = false;
        par[item.prop] = item.value;
      });
      for (let i = 0; i < this.formList.length; i++) {
        const item = this.formList[i];

        if (item.checked && !item.value) {
          this.error = item.placeholder;
          return (item.isError = true);
        }
      }
      return this.$emit("form", par);
    },
  },
};
</script>
<style lang="scss">
.bi-form {
  .m-main {
    .n-content {
      margin-bottom: 16px;
      display: flex;
      .t-label {
        width: 86px;
        font-size: 14px;
        display: flex;
        align-items: center;
        span {
          font-size: 14px;
        }
      }
      .t-type {
        flex: 1;
      }
      .t-type-active {
        .el-input__inner {
          border: 1px solid #f56c6c !important;
        }
        input:hover {
          border: 1px solid #f56c6c !important;
        }
        .el-input input {
          border: 1px solid #f56c6c !important;
        }
      }
      .t-checked {
        min-width: 30px;
        @include fcc;
        .t-error {
          color: #ff0000c7;
        }
      }
    }
  }
  .t-error-content {
    height: 30px;
    margin-bottom: 16px;
    color: #ff0000c7;
    line-height: 30px;
  }
  .m-btn {
    display: flex;
    justify-content: center;
    .el-button {
      width: 200px;
    }
  }
}
</style>
