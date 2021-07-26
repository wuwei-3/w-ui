<!--
 * @Description:
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-03-08 10:15:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 10:01:10
-->

## 密码输入框

密码强度输入框

原地址：https://github.com/apertureless/vue-password-strength-meter。

:::demo

```html
<template>
  <div class="b-input-pwd">
    <b-input-pwd
      @input="changeInput"
      className="w-password"
      placeholder="请输入用户密码"
    ></b-input-pwd>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      /**
       * @description:输入框改变的值
       * @param {*} input
       * @return {*}
       */
      changeInput(val) {
        console.log("pwd", val);
      },
    },
  };
</script>
```

:::

### Radio Events

| 事件名称 | 说明                                    | 回调参数 |
| -------- | --------------------------------------- | -------- |
| input    | 页面输入框值更改(密码框输入长度最大 20) | 输入框值 |

### Attributes

| 参数        | 说明         | 类型   | 可选值 | 默认值     |
| ----------- | ------------ | ------ | ------ | ---------- |
| placeholder | 输入框占位   | String | -      | 请输入密码 |
| input       | 默认输入框值 | String | -      | -          |
| className   | 自定义样式   | String | -      | -          |
