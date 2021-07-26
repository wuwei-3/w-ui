<!--
 * @Description: from表单
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2020-12-22 15:40:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-06 15:19:54
-->
<template>
  <div class="b-from">
    <!-- <div class="t-span">
      <el-button type="warning" @click="clearForm">取消赋值</el-button>
      <el-button type="primary" @click="addForm">开始赋值</el-button>
    </div>
    <div class="t-form">
      <b-form @form="getForm" :formParams="formParams"></b-form>
    </div> -->
    <b-select></b-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formParams: null,
    };
  },
  methods: {
    /**
     * @description: 赋值
     * @param {*}
     * @return {*}
     */
    addForm() {
      this.formParams = {
        account: "wuwei3",
        weight: 60,
        shoolId: 2,
        address: [3, 4],
        biithday: "2021-03-02",
        sex: true,
        sort: 10,
      };
    },
    /**
     * @description: 取消
     * @param {*}
     * @return {*}
     */
    clearForm() {
      this.formParams = null;
    },
    /**
     * @description: 获取输入框值
     * @param {*}
     * @return {*}
     */
    getForm(val) {
      console.log("form", val);
    },
  },
};
</script>
<style lang="scss">
// style
.b-from {
  @include wh;
  box-sizing: border-box;
  .t-form {
    padding: 16px;
    box-sizing: border-box;
  }
  .t-span {
    padding-left: 16px;
    display: flex;
    justify-content: center;
  }
}
</style>
