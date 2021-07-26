<!--
 * @Description: 公共分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:08:43
 -->

## 单选

单选按钮，用法同 Element-box，仅更改样式。

:::demo

```html
<template>
  <div class="b-test">
    <div class="s-radio">
      <el-radio v-model="radio" :label="1">数据可用</el-radio>
      <el-radio v-model="radio" :label="2">数据不可用</el-radio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        radio: 2,
      };
    },
  };
</script>
<style lang="scss">
  // style
  .b-test {
    @include wh;
    box-sizing: border-box;
  }
</style>
```

:::
