<!--
 * @Description: 公共分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:08:18
 -->

## 日期选择器

用于选择日期（年月日），仅用于条件搜索。

:::demo

```html
<template>
  <div class="b-time">
    <b-date @time="onTime"></b-date>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      /**
       * @description: 获取时间
       * @param {*}
       * @return {*}
       */
      onTime(val) {
        console.log("time", val);
      },
    },
  };
</script>
<style lang="scss">
  // style
  .b-time {
    @include wh;
    box-sizing: border-box;
  }
</style>
```

:::

### Radio Events

| 事件名称 | 说明         | 回调参数             |
| -------- | ------------ | -------------------- |
| time     | 选中后时间值 | [startTime，endTime] |
