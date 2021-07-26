<!--
 * @Description: 卡片
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:06:48
 -->

## 常用卡片

卡片组件提供常用几种卡片格式
:::demo

```html
<template>
  <div class="b-card">
    <div class="m-top16 m-bottom16">单行卡片</div>
    <div class="b-fh m-bottom16">
      <b-button type="info" class="m-right16" @click="check = false"
        >正常</b-button
      >
      <b-button @click="check = true">选中</b-button>
    </div>
    <div>
      <b-card
        :check="check"
        :params="params"
        type="1"
        @click="onClick(params)"
      ></b-card>
    </div>
    <div class="m-top16 m-bottom16">多行卡片</div>
    <div class="b-fh m-bottom16">
      <b-button type="info" class="m-right16" @click="check2 = false"
        >正常</b-button
      >
      <b-button @click="check2 = true">选中</b-button>
    </div>
    <div>
      <b-card
        :check="check2"
        :params="params2"
        type="2"
        @click="onClick(params)"
      ></b-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        check: false,
        check2: false,
        params2: {
          title: "ifly_12asdb_001_v1",
          siteName: "北京师范大学",
          time: "2020-22-22",
        },
        params: {
          left: "位伍",
          center: "dpsajc",
          right: "el-icon-edit",
          desc: "test",
          disabled: true,
        },
      };
    },
    methods: {
      /**
       * @description: 点击事件
       * @param {*}
       * @return {*}
       */
      onClick(params) {
        console.log("params", params);
      },
    },
  };
</script>
<style lang="scss">
  // style
  .b-card {
    @include wh;
    box-sizing: border-box;
  }
</style>
```

:::

### Radio Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| click    | 点击获取当前卡片值 | params   |

### Attributes

| 参数    | 说明     | 类型    | 可选值      | 默认值  |
| ------- | -------- | ------- | ----------- | ------- |
| params  | 卡片字段 | Object  | -           | {}      |
| bgColor | 卡片字段 | String  | -           | #f1f1f1 |
| type    | 卡片类型 | Number  | 1，2        | 1       |
| check   | 是否选中 | Boolean | true，false | -       |
