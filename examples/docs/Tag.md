<!--
 * @Description: 公共分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:07:54
 -->

## 标签

用于表示不同状态下文字样式，突出文字，视觉显著。

:::demo

```html
<template>
  <div class="b-tag b-fh">
    <b-tag type="1" title="wuewi3"></b-tag>
    <b-tag type="0" title="wuewi3"></b-tag>
    <b-tag title="12345678" bgColor="red"></b-tag>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
  };
</script>
<style lang="scss">
  // style
  .b-tag {
    @include wh;
    box-sizing: border-box;
    > div {
      margin-right: 16px;
    }
  }
</style>
```

:::

### Attributes

| 参数    | 说明           | 类型   | 可选值                      | 默认值  |
| ------- | -------------- | ------ | --------------------------- | ------- |
| type    | 类型           | Number | 1-pass，0-warning，-1-error | 1       |
| title   | 自定义展示字段 | String |                             | -       |
| bgColor | 背景           | String | -                           | #f2f2f2 |
