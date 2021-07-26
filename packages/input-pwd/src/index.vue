<!--
 * @Description: 密码强度输入框
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-03-08 10:16:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 09:53:57
-->
<template>
  <div class="bi-input-pwd">
    <div class="t-flex">
      <password-meter
        v-model="password"
        @score="onScore"
        :placeholder="placeholder"
        :defaultClass="'x-meter ' + className + (errStatus ? ' t-error' : '')"
      />
      <div class="t-meter">
        <div
          v-for="(item, i) in meterList"
          :key="i"
          :class="['r-div', item.status ? 'r-active' : '']"
          :style="{ background: item.status ? item.value : '' }"
        >
          <span></span>
        </div>
      </div>
    </div>
    <div class="t-tip">
      <span v-show="scoreSize <= 2 && password" class="p-err"
        >密码等级较低，需修改</span
      >
      <span v-show="scoreSize == 3 && password" class="p-suc"
        >密码等级一般，可以使用</span
      >
      <span v-show="scoreSize > 3 && password" class="p-suc"
        >密码等级非常高，可以使用</span
      >
    </div>
  </div>
</template>

<script>
import passwordMeter from "vue-password-strength-meter";
export default {
  name: "BInputPwd",
  components: {
    passwordMeter,
  },
  props: {
    placeholder: {
      type: String,
      default: "请输入密码",
    },
    input: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      errStatus: false,
      scoreSize: 0,
      password: "",
      meterList: [
        { value: "#db3f30", status: false },
        { value: "#ffbd02", status: false },
        { value: "#09af7c", status: false },
        { value: "#09af7c", status: false },
        { value: "#09af7c", status: false },
      ],
    };
  },
  watch: {
    input(val) {
      this.password = val;
    },
    password(val) {
      this.errStatus = !val;
      if (!val) {
        this.meterList.forEach((item) => {
          item.status = false;
        });
        return this.$emit("input", null);
      }
      if (val.length >= 20) {
        return (this.password = val.substring(0, 20));
      }
      this.$emit("input", val);
    },
    scoreSize(val) {
      this.meterList.forEach((item) => {
        item.status = false;
      });
      if (val === 0) {
        return;
      }
      for (let i = 0; i < val; i++) {
        this.meterList[i].status = true;
      }
    },
  },
  mounted() {
    this.password = this.input || "";
  },
  methods: {
    /**
     * @description: 密码强度
     * @param {*}
     * @return {*}
     */
    onScore(val) {
      this.scoreSize = val + 1;
    },
  },
};
</script>
<style lang="scss">
//
.bi-input-pwd {
  width: 100%;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  align-items: center;
  .x-meter::-webkit-input-placeholder {
    color: #bfbfbf;
  }
  .i-x {
    color: #f56c6c;
    margin-right: 5px;
  }
  .t-flex {
    flex: 1;
    .Password {
      width: 100%;
      max-width: initial;
      .x-meter {
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #d9d9d9 !important;
        border-radius: 0;
        height: 40px;
        padding: 16px;
        background-color: white;
        outline: none;
      }
      .x-meter:hover {
        border: 1px solid #bfbfbf !important;
      }
      .x-meter:focus {
        border: 1px solid #005bfa !important;
      }
      .x-meter:active {
        border: 1px solid #005bfa !important;
      }
      .t-error {
        border-color: #f56c6c !important;
      }
      .t-error:hover,
      .t-error:focus,
      .t-error:active {
        border: 1px solid #f56c6c !important;
      }
      .Password__icons {
        display: none;
      }
      .Password__strength-meter {
        display: none;
      }
    }
  }
  .el-input {
    flex: 1;
  }
  .t-span {
    width: 78px;
  }
  .t-tip {
    position: absolute;
    top: 11px;
    right: 12px;
    font-size: 12px;
    .p-err {
      color: #d71212d9;
    }
    .p-suc {
      color: #09af7c;
    }
  }
  .po-password-strength-bar {
    display: none;
  }
  .t-meter {
    height: 32px;

    @include fh;
    div {
      width: 40px;
      height: 4px;
      background: #000000a6;
      margin-right: 4px;
    }
    .r-active {
      background: #09af7c;
    }
  }
}
</style>
