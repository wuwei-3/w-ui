<!--
 * @Description: 输入框
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 13:49:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-18 15:20:19
-->
<template>
  <div
    class="bi-input"
    :style="{ width: Number(width) ? width + 'px' : width }"
  >
    <el-input
      v-model="inputOut"
      :placeholder="placeholder"
      :style="{
        width: Number(width) ? width + 'px' : width,
        height: Number(height) ? height + 'px' : height,
      }"
      clearable
      :maxlength="maxlength"
      :disabled="disabled"
      :class="'bi-input_' + type"
      @keypress.native.enter="changeInput(inputOut)"
    >
      <i
        slot="suffix"
        class="el-input__icon el-icon-search cu"
        @click="changeInput(inputOut)"
        v-show="suffix"
      ></i>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "BInput",
  props: {
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    width: {
      type: [String, Number],
      default: "250",
    },
    height: {
      type: [String, Number],
      default: "40",
    },
    input: {
      type: String,
      default: "",
    },
    suffix: {
      type: [String, Boolean],
      default: true,
    },
    type: {
      type: [String, Number],
      default: "primary",
    },
    maxlength: {
      type: [String, Number],
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    input(val) {
      this.inputOut = val || "";
    },
    inputOut(val) {
      if (!val) {
        this.$emit("input", null);
      }
    },
  },
  data() {
    return {
      inputOut: "",
    };
  },
  mounted() {
    this.inputOut = this.input || "";
  },
  methods: {
    /**
     * @description: 输入框改变,延迟获取
     * @param {input}
     * @return:
     */
    changeInput(input) {
      this.$emit("input", input);
    },
  },
};
</script>
<style lang="scss">
//@import ''; //引入公共css类
.bi-input {
  width: 100%;
  .cu {
    cursor: pointer;
  }
  .cu:hover {
    color: #005bfa;
  }
  .el-input.is-disabled {
    background-color: #f3f3f3;
    border-color: #f3f3f3;
    color: #00000040;
  }
  .el-input__inner {
    height: 100%;
    width: 100%;
  }
  .bi-input_error {
    .el-input__inner {
      border: 1px solid #ee2a20;
    }
    .el-input__inner:focus {
      border: 2px solid #ee2a20;
    }
  }
}
</style>
