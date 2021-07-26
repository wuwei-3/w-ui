<!--
 * @Description: 定制化时间线
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 15:19:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-30 20:32:44
-->
<template>
  <div class="time-line">
    <div class="t-time">
      <span
        class="e-icon"
        :style="{
          height: width + 'px',
          width: width + 'px',
        }"
      ></span>
      <span
        :class="['e-wrie']"
        :style="{
          height: height + 'px',
          width: width + 'px',
          'margin-left': -width + 'px',
        }"
        v-show="!disabled"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BTime",
  props: {
    disabled: {
      type: Boolean,
      defalut: false,
    },
    height: {
      type: [String, Number],
      default: 100,
    },
    width: {
      type: [String, Number],
      default: 6,
    },
  },
};
</script>
<style lang="scss" scoped>
//@import ''; //引入公共css类
.time-line {
  width: 100%;
  height: 100%;
  .t-time {
    position: relative;
    span {
      display: inline-block;
    }
    .e-time {
      color: #000000a6;
    }
    .e-icon {
      border-radius: 50%;
      background: #0070f5;
    }
    .e-wrie {
      position: absolute;
      background: #f3f2f1;
      top: 16px;
    }
  }
}
</style>
