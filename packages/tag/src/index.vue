<!--
 * @Description: 分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 15:19:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-01-18 17:22:00
-->
<template>
  <div class="tag">
    <div
      class="g-error"
      v-if="type == -1"
      :style="{ background: bgColor ? bgColor : '' }"
    >
      <span v-show="title">{{ title ? title : "Failed" }}</span>
      <span v-show="name">{{ name ? name : "Failed" }}</span>
    </div>
    <div
      class="g-warning"
      v-else-if="type == 0"
      :style="{ background: bgColor ? bgColor : '' }"
    >
      <span v-show="title">{{ title ? title : "Warning" }}</span>
      <span v-show="name">{{ name ? name : "Warning" }}</span>
    </div>
    <div
      class="g-success"
      v-else
      :style="{ background: bgColor ? bgColor : '' }"
    >
      <span v-show="title">{{ title ? title : "Pass" }}</span>
      <span v-show="name">{{ name ? name : "Pass" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BTag",
  props: {
    title: {
      type: [String, Number],
      default: null,
    },
    name: {
      type: [String, Number],
      default: null,
    },
    bgColor: {
      type: [String],
      default: null,
    },
    type: {
      type: [String, Number],
      default: 1,
    },
  },
};
</script>
<style lang="scss" scoped>
//@import ''; //引入公共css类
.tag {
  > div {
    padding: 0 8px;
    color: #000000e6;
    height: 24px;
    @include fcc;
    width: fit-content;
    border-radius: 12px;
    font-size: 12px;
  }
  .g-success {
    background: #f2f2f2;
  }
  .g-error {
    background: #ffccc5;
  }
  .g-warning {
    background: #ffecbd;
  }
}
</style>
