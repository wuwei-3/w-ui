<!--
 * @Description: 时间线
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:06:16
 -->

## 时间线

日历组件，常用于日志记录，暂不支持横向。

:::demo

```html
<template>
  <div class="b-timeline">
    <div v-for="i in 4" :key="i" class="t-timeLine">
      <b-time width="10" height="100" :disabled="i == 4"></b-time>
    </div>
  </div>
</template>

<style lang="scss">
  // style
  .b-timeline {
    @include wh;
    height: 400px;
    box-sizing: border-box;
    .t-timeLine {
      height: 100px;
    }
  }
</style>
```

:::

### Attributes

| 参数     | 说明                 | 类型    | 可选值 | 默认值 |
| -------- | -------------------- | ------- | ------ | ------ |
| disabled | 一般用于禁用最后一个 | Boolean | -      | false  |
| height   | 时间轴高度           | Number  | -      | 6      |
| width    | 时间轴宽度           | Number  | -      | 6      |
