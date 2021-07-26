<!--
 * @Description: 公共分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:07:27
 -->

## 消息提示

全局消息提示，用法同 Elment-Message。

:::demo

```html
<template>
  <div class="b-message">
    <div class="b-fh m-bottom16">
      <b-button class="m-right16" type="info" @click="open1">消息</b-button>
      <b-button class="m-right16" @click="open2">成功</b-button>
      <b-button class="m-right16" type="warning" @click="open3">警告</b-button>
      <b-button class="m-right16" type="error" @click="open4">错误</b-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      open1() {
        this.$message.info("这是一条消息提示");
      },

      open2() {
        this.$message.success("这是一条成功提示");
      },

      open3() {
        this.$message.warning("这是一条警告提示");
      },

      open4() {
        this.$message.error("这是一条错误提示");
      },
    },
  };
</script>
<style lang="scss">
  // style
  .b-message {
    @include wh;
    box-sizing: border-box;
  }
</style>
```

:::
