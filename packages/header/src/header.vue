<!--
 * @Description: 全局头部
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-03-26 11:19:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-21 15:20:45
 -->
<template>
  <div class="f-header">
    <slot name="icon" class="r-icon"></slot>
    <slot name="title"></slot>
    <div
      v-for="(menu, m) in menus"
      :key="m"
      :class="['r-menu', $route.meta.index == m ? 'u-active' : '']"
      @click="changeMenu(menu, m)"
    >
      <span>{{ menu.name }}</span>
    </div>
    <slot name="message"></slot>
  </div>
</template>
<script>
export default {
  name: 'BHeader',
  props: {
    menus: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      time: '',
    };
  },
  methods: {
    /**
     * @description: 页面跳转
     * @param {menu,m} 菜单 index
     * @return:
     */
    changeMenu(menu) {
      if (menu.path) {
        this.$router.push(menu.path);
        /* 如果有子菜单，存储获取 */
        if (menu.children && menu.children.length !== 0) {
          this.$store.commit('setDefMenu', menu.children);
        }
      }
    },
  },
};
</script>
<style lang="scss">
.f-header {
  height: 60px;
  background: #0070f5;
  color: white;
  padding-left: 20px;
  @include fh;
  position: relative;
  .r-icon {
    font-size: 30px;
    margin-right: 20px;
  }
  .r-title {
    @include sw(16px, bold);
    margin-right: 30px;
  }
  .r-message {
    position: absolute;
    right: 10px;
    color: white;
    @include sw(14px, 400);
  }
  .r-menu {
    color: #ffffff73;
    height: 100%;
    padding: 0 15px;
    @include fcc;
    cursor: pointer;
  }
  .u-active {
    background: #004da9;
    color: white;
  }
}
</style>
