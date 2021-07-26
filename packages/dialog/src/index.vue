<!--
 * @Description: 弹窗
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-03-11 17:29:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-28 14:51:00
 -->
<template>
  <div class="dialog">
    <el-dialog
      :title="title"
      :visible.sync="visable"
      :width="Number(width) ? width + 'px' : width"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="close"
      :top="top"
      :custom-class="dClass"
    >
      <slot></slot>
      <span slot="footer" class="dialog-footer">
        <b-button
          size="small"
          width="96"
          type="info"
          bClass="r-cancel"
          @click="close(false)"
          >取消</b-button
        >
        <b-button size="small" width="96" @click="close(true)">确定</b-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "BDialog",
  components: {},
  props: {
    dClass: {
      type: String,
      default: "",
    },
    footer: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: "这是标题",
    },
    visable: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "500",
    },
    top: {
      type: String,
      default: "15vh",
    },
  },
  methods: {
    /**
     * @description: 关闭弹窗
     * @param {type}
     * @return:
     */
    close(val) {
      this.$emit("dialog", val);
    },
  },
};
</script>

<style lang="scss">
.dialog {
  .el-dialog__header {
    height: 48px;
    line-height: 48px;
    padding: 0 16px;
    font-weight: 550;
    background: #0070f5;
    .el-dialog__title {
      color: white;
      font-weight: 500;
    }
    .el-dialog__headerbtn {
      top: 12px;
      right: 15px;
      .el-dialog__close {
        color: white;
        font-size: 23px;
      }
    }
  }
  .el-dialog__body {
    padding: 0;
    text-align: left;
    font-size: 14px;
    font-weight: 400;
    line-height: inherit;
    min-height: auto;
  }
  .el-dialog__footer {
    height: 60px;
    line-height: 60px;
    padding: 0 16px;
    .dialog-footer {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      .r-cancel {
        margin-right: 16px;
      }
    }
  }
}
</style>
