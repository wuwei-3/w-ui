<!--
 * @Description: 弹窗
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-03-11 17:29:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-18 17:20:13
 -->
<template>
  <div class="dialog">
    <el-dialog
      :title="title"
      :visible.sync="visable"
      :width="width"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :before-close="close"
      :top="height"
    >
      <span>{{ content }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="close(true)" class="r-save"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BDialog',
  props: {
    title: {
      type: String,
      default: '这是标题',
    },
    visable: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '500px',
    },
    content: {
      type: String,
      default: '这是内容',
    },
    height: {
      type: String,
      default: '15vh',
    },
  },
  methods: {
    /**
     * @description: 关闭弹窗
     * @param {type}
     * @return:
     */
    close(val) {
      this.$emit('dialog', val);
    },
  },
};
</script>

<style lang="scss">
.dialog {
  .el-dialog__header {
    height: 48px;
    line-height: 48px;
    padding: 0 10px;
    font-weight: 550;
    background: #1989fa;
    .el-dialog__title {
      color: white;
      font-weight: 500;
    }
    .el-dialog__headerbtn {
      top: 15px;
      right: 15px;
      .el-dialog__close {
        color: white;
        font-size: 23px;
      }
    }
  }
  .el-dialog__body {
    padding: 0;
    min-height: 100px;
    text-align: center;
    line-height: 100px;
    font-size: 16px;
    font-weight: 550;
  }
  .el-dialog__footer {
    height: 60px;
    line-height: 60px;
    padding: 0 10px;
    .r-save {
      background: #1989fa;
      .el-button {
        padding: 10px 17px;
      }
    }
    .el-button {
      padding: 10px 17px;
    }
  }
}
</style>
