<!--
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-14 14:31:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-14 14:50:52
 -->
<template>
  <div class="f-color">
    <div v-for="(color, c) in colors" :key="c" :style="{ background: color }">
      <span>{{ color }}</span>
    </div>
  </div>
</template>

<script>
import colors from './color.js';
export default {
  name: 'BColor',
  data() {
    return {
      colors: colors,
    };
  },
};
</script>
<style lang="scss" scoped>
//@import ''; //引入公共css类
.f-color {
  > div {
    @include wh(200px, 80px);
    border-radius: 5px;
    color: white;
    text-align: center;
    line-height: 80px;
    float: left;
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
</style>
