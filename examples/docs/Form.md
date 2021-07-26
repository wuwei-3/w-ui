<!--
 * @Description: 输入框
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 13:48:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:48:08
-->

## Form 统一表单

用于统一表单新增，修改弹窗。
:::demo

```html
<template>
  <div class="bi-from">
    <div class="t-form">
      <b-form @form="getForm" :formParams="formParams"></b-form>
    </div>
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
```

:::

### Radio Events

| 事件名称 | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| form     | 提交表单后表单内的值 | 表单对象 |

### formList 字段解释

| 参数        | 说明                   | 类型    | 可选值 | 默认值 |
| ----------- | ---------------------- | ------- | ------ | ------ |
| label       | 左侧展示字段           | String  | -      | 0      |
| prop        | 字段                   | String  | -      | -      |
| value       | 输入值                 | String  | -      | -      |
| showLabel   | 是否展示左侧 label     | Boolean | -      | -      |
| placeholder | 提示语                 | String  | -      | -      |
| length      | 输入框长度,仅输入框    | Number  | -      | 20     |
| type        | 类型                   | String  | -      | -      |
| checked     | 是否校验               | Boolean | -      | -      |
| append      | 单位                   | String  | -      | -      |
| disabled    | 是否禁用               | Boolean | -      | false  |
| isError     | 输入框异常             | Boolean | -      | false  |
| data        | 下拉框值，仅带下拉框的 | Array   | -      | []     |
