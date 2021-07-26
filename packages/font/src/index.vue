<!--
 * @Description: 字体
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-14 11:16:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-14 14:05:32
 -->
<template>
  <div :class="[size, weight ? 'f-weight' : '']" :style="{ color: color }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BFont',
  props: {
    size: {
      type: String,
      default: 'f-medium',
    },
    weight: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#444',
    },
  },
};
</script>
<style lang="scss" scoped>
/* 大小，粗细 */
.f-max-large {
  font-size: 18px;
}
.f-large {
  font-size: 16px;
}
.f-medium {
  font-size: 14px;
}
.f-small {
  font-size: 12px;
}
.f-weight {
  font-weight: bold;
}
</style>
