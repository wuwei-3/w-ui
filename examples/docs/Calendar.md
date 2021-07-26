<!--
 * @Description: 日历页面
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:05:29
 -->

## 日历

日历组件，用于获取指定月份日历数据，<span class="bi-color-error">仅提供日历模板数据</span>。

日历头格式：<span class="bi-color-main">日 一 二 三 四 五 六</span>

:::demo

```html
<template>
  <div class="b-calendar">
    <div class="b-fh m-bottom16">
      <b-button type="info" class="m-right16" @click="monthNum = monthNum - 12"
        >上一年</b-button
      >
      <b-button type="info" class="m-right16" @click="monthNum = monthNum - 1"
        >上个月</b-button
      >
      <b-button type="info" class="m-right16" @click="monthNum = lineMonth"
        >当月</b-button
      >
      <b-button type="info" class="m-right16" @click="monthNum = monthNum + 1"
        >下一月</b-button
      >
      <b-button type="info" class="m-right16" @click="monthNum = monthNum + 12"
        >下一年</b-button
      >
    </div>
    <div class="t-json">
      <span v-html="timeList"></span>
    </div>
  </div>
</template>

<script>
  import initDate from "../utils/calendar.js";
  import moment from "moment";
  export default {
    data() {
      return {
        timeList: [],
        monthNum: null,
        lineMonth: null,
      };
    },
    watch: {
      monthNum(val) {
        this.timeList = this.getDate(val);
      },
    },
    mounted() {
      let month = Number(moment().format("MM")) - 1;
      this.lineMonth = month;
      this.timeList = this.getDate(month);
    },
    methods: {
      /**
       * @description: 获取日历面板数据
       * @param {*}
       * @return {*}
       */
      getDate(val) {
        let time = moment()
          .month(val)
          .format("YYYY-MM-DD");
        return initDate(time, val);
      },
    },
  };
</script>
<style lang="scss">
  // style
  .b-calendar {
    @include wh;
    box-sizing: border-box;
    .t-json {
      background: #f1f1f1;
      padding: 8px;
      box-sizing: border-box;
    }
  }
</style>
```

:::

### 返回字段解释

| 参数     | 说明     | 类型           | 可选值      | 默认值 |
| -------- | -------- | -------------- | ----------- | ------ |
| day      | 天       | Number，String | -           | -      |
| month    | 月       | Number，String | -           | -      |
| year     | 年       | Number，String | -           | -      |
| disabled | 小于当天 | Boolean        | true，false | -      |
| dateTime | 年月日   | String         | -           | -      |
