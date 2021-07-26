<!--
 * @Description: 输入框
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 13:48:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 09:36:53
-->

## 输入框

通过鼠标或键盘输入字符

:::demo

```html
<template>
  <div class="b-input">
    <b-input
      placeholder="请输入搜索内容"
      :input="input"
      @input="onChange"
    ></b-input>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: "",
      };
    },
    methods: {
      /**
       * @description:输入框改变的值
       * @param {*} input
       * @return {*}
       */
      onChange(input) {
        this.input = input;
        console.log("input", input);
      },
    },
  };
</script>
```

:::

### Radio Events

| 事件名称 | 说明                              | 回调参数 |
| -------- | --------------------------------- | -------- |
| input    | 页面输入框值更改(支持 enter 事件) | 输入框值 |

### Attributes

| 参数        | 说明           | 类型          | 可选值 | 默认值     |
| ----------- | -------------- | ------------- | ------ | ---------- |
| placeholder | 输入框占位     | String        | -      | 请输入内容 |
| width       | 宽度           | Number,String | -      | -          |
| height      | 高度           | Number,String | -      | 40         |
| input       | 输入框字段     | String        | -      | -          |
| maxlength   | 最大输输入长度 | Number        | -      | 100        |
| disabled    | 是否禁用       | Boolean       | -      | false      |
