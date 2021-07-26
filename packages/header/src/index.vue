<!--
 * @Description: 全局头部
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-03-26 11:19:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 16:07:34
 -->
<template>
  <div class="f-header" :style="{ background: bgColor, color: color }">
    <slot name="icon" class="r-icon"></slot>
    <slot name="title"></slot>
    <div
      v-for="(menu, m) in menus"
      :key="m"
      :class="['r-menu', mIndex == m ? 'u-active' : '']"
      @click="changeMenu(menu, m)"
    >
      <span>{{ menu.name }}</span>
      <div class="u-child" v-show="menu.childs && menu.childs.length !== 0">
        <div
          v-for="(child, c) in menu.childs"
          :key="c"
          :class="c === $route.meta.childIndex ? 'd-active' : ''"
          @click="changeMenu(child, c)"
        >
          {{ child.name }}
        </div>
      </div>
    </div>
    <slot name="message"></slot>
  </div>
</template>
<script>
export default {
  name: "BHeader",
  props: {
    menus: {
      type: Array,
      default: () => {
        return [];
      },
    },
    bgColor: {
      type: String,
      default: "#0070f5",
    },
    mIndex: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      time: "",
    };
  },
  methods: {
    /**
     * @description: 页面跳转
     * @param {menu,m} 菜单 index
     * @return:
     */
    changeMenu(menu, index) {
      if (menu.path) {
        this.$emit("mIndex", index);
        this.$router.push(menu.path);
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
  padding: 0 16px;
  @include fh;
  position: relative;
  box-shadow: 0 8px 32px -3px #1966ff73;
  .r-icon {
    font-size: 30px;
    margin-right: 16px;
  }
  .r-title {
    @include sw(16px, bold);
    margin-right: 16px;
  }
  .r-message {
    position: absolute;
    right: 16px;
    color: white;
    @include sw(14px, 400);
  }
  .r-menu {
    color: #ffffff73;
    height: 100%;
    padding: 0 16px;
    @include fcc;
    cursor: pointer;
    position: relative;
    .u-child {
      display: none;
      position: absolute;
      padding: 0 8px;
      background: #0070f5;
      min-width: 100px;
      box-sizing: border-box;
      top: 60px;
      left: 0;
      text-align: center;
      div {
        height: 40px;
        line-height: 40px;
      }
      > div:hover {
        color: white;
      }
      .d-active {
        color: white;
        background: #004da9;
      }
    }
  }
  .r-menu:hover {
    .u-child {
      display: block;
    }
  }
  .u-active {
    background: #004da9;
    color: white;
  }
}
</style>
