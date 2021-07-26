<!--
 * @Description: button 组件
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-12-09 11:29:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-01 14:43:11
-->
<template>
  <div class="ui-button">
    <el-button
      v-throttle
      :type="type"
      @click="onClick"
      :size="size"
      :disabled="disabled"
      :class="bClass"
      :style="{
        width: width + 'px',
        height: height + 'px',
        background: bgColor,
        borderColor: bgColor,
        color: color,
      }"
    >
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'BButton',
  props: {
    /* 禁用状态 */
    disabled: {
      type: Boolean,
      default: false,
    },
    /* 背景 */
    bgColor: {
      type: String,
      default: 'not specified',
    },
    /* 背景 */
    color: {
      type: String,
      default: 'not specified',
    },
    /* 按钮类型 */
    type: {
      type: String,
      default: 'primary',
    },
    /* 按钮宽度 */
    width: {
      type: [Number, String],
      default: 'auto',
    },
    /* 按钮宽度 */
    height: {
      type: [Number, String],
      default: 'auto',
    },
    /* 按钮大小 */
    size: {
      type: String,
      default: 'medium',
    },
    /* 按钮class */
    bClass: {
      type: String,
      default: '',
    },
  },
  directives: {
    throttle: {
      // 指令的定义
      bind: (el, binding) => {
        let throttleTime = binding.value; // 防抖时间
        if (!throttleTime) {
          // 用户若不设置防抖时间，则默认2s
          throttleTime = 2000;
        }
        let cbFun;
        el.addEventListener(
          'click',
          (event) => {
            if (!cbFun) {
              // 第一次执行
              cbFun = setTimeout(() => {
                cbFun = null;
              }, throttleTime);
            } else {
              event && event.stopImmediatePropagation();
            }
          },
          true
        );
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * @description: 原生点击
     * @param {*}
     * @return {*}
     */

    onClick() {
      this.$emit('click');
    },
  },
};
</script>
<style lang="scss">
.ui-button {
  .el-button {
    padding: 0 16px;
    height: 40px;
    .b-left {
      margin-right: 4px;
    }
    .b-right {
      margin-left: 8px;
    }
  }
  .el-button--mini {
    height: 24px;
  }
  .el-button--small {
    height: 32px;
  }
  .el-button--primary {
    background: $bi-core_main;
    border-color: $bi-core_main;
    color: $bi-grey_rey1;
    border: 0;
  }
  .el-button--warning {
    background: $bi-core_warning;
    border-color: $bi-core_warning;
    color: $bi-core-white;
  }
  .el-button--warning:hover {
    background: $bi-yello_llo6;
    border-color: $bi-yello_llo6;
  }
  .el-button--warning:active {
    background: $bi-yello_llo5;
    border-color: $bi-yello_llo5;
  }
  .el-button--error {
    background: $bi-core_error;
    border-color: $bi-core_error;
    color: $bi-core-white;
  }
  .el-button--error:hover {
    background: $bi-error_ror6;
    border-color: $bi-error_ror6;
  }
  .el-button--error:active {
    background: $bi-error_ror5;
    border-color: $bi-error_ror5;
  }
  .el-button--info {
    border: 0;
  }
  // 移入
  .el-button--primary:hover {
    background: #0043e2;
    border-color: #0043e2;
  }
  //  聚焦
  .el-button--primary:focus {
    background: #005bfa;
    border-color: #005bfa;
  }
  // 点击
  .el-button--primary:active {
    background: #002eba;
    border-color: #002eba;
  }
  .el-button--info {
    color: black;
    background-color: #e6e6e6;
    border-color: #e6e6e6;
  }
  // 移入
  .el-button--info:hover {
    background: #d9d9d9;
    border-color: #d9d9d9;
  }
  //  聚焦
  .el-button--info:focus {
    background: #e6e6e6;
    border-color: #e6e6e6;
  }
  // 点击
  .el-button--info:active {
    background: #ccc;
    border-color: #ccc;
  }
  // 禁止
  .is-disabled {
    background: #f3f3f3 !important;
    border-color: #f3f3f3 !important;
    color: #00000040 !important;
    cursor: not-allowed;
  }
}
</style>
