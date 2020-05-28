<!--
 * @Description: 按钮风格
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:15:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-14 15:39:05
 -->
<template>
  <div class="bi-button">
    <div
      class="n-btn"
      :style="{
        width: width,
        height: height,
        color: color,
        background: bgColor,
      }"
    >
      <span>
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BButton',
  props: {
    width: {
      type: String,
      default: '90px',
    },
    height: {
      type: String,
      default: '40px',
    },
    color: {
      type: String,
      default: '#fff',
    },
    bgColor: {
      type: String,
      default: '#0070f5',
    },
  },
};
</script>
<style lang="scss" scoped>
.bi-button {
  color: #444;
  .n-btn {
    border-radius: 4px;
    margin: 0;
    @include fcc;
    @include el;
    cursor: pointer;
    &:active {
      opacity: 0.8;
    }
  }
}
</style>
