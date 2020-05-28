<!--
 * @Description: 尾
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 15:03:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 15:14:28
-->
<template>
  <div
    class="footer"
    :style="{ color: color, height: height, background: background }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BFooter',
  props: {
    color: {
      type: String,
      default: '#d9d9d9',
    },
    height: {
      type: String,
      default: '40px',
    },
    background: {
      type: String,
      default: '#f7f8f8',
    },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  @include fcc;
}
</style>
