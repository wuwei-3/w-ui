<!--
 * @Description: 左侧导航栏
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 16:17:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 09:33:11
-->
<template>
  <div class="menu">
    <el-menu
      class="t-el-menu"
      :collapse="collapse"
      :background-color="bgColor"
      :unique-opened="true"
      :default-active="activeIndex"
      :popper-append-to-body="false"
      :collapse-transition="false"
      popper-class="t-popper"
      @select="selectMenu"
      :style="{ width: width + 'px' }"
    >
      <div v-for="menu in menus" :key="menu.id" class="i-menu">
        <el-submenu
          :index="menu.link"
          v-if="menu.children && menu.children.length != 0"
        >
          <template slot="title">
            <i :class="'iconfont ' + menu.icon"></i>
            <span slot="title">{{ menu.title }}</span>
          </template>
          <div v-for="(item, index) in menu.children" :key="index">
            <el-menu-item-group>
              <el-menu-item :index="item.link">
                {{ item.title }}
              </el-menu-item>
            </el-menu-item-group>
          </div>
        </el-submenu>
        <el-menu-item :index="menu.link" v-else>
          <i :class="'iconfont ' + menu.icon"></i>
          <span slot="title">{{ menu.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "BMenu",
  props: {
    /* 自动展开 */
    collapse: {
      type: Boolean,
      default: false,
    },
    /* 默认选中 */
    activeIndex: {
      type: [String, Number],
      default: "",
    },
    /* 背景颜色 */
    bgColor: {
      type: String,
      default: "#f5f7fa",
    },
    /* 是否自动跳转 */
    status: {
      type: Boolean,
      default: false,
    },
    /* 默认选中 */
    width: {
      type: [String, Number],
      default: 240,
    },
    menus: {
      type: Array,
      default: () => {
        return [
          {
            link: "path1",
            children: [],
            title: "table1",
            icon: "iconbio_logo",
          },
          { link: "path2", children: [], title: "table2", icon: "iconshape" },
          {
            link: "table3",
            children: [
              { link: "page3", children: [], title: "page1", icon: "" },
              { link: "path4", children: [], title: "page2", icon: "" },
              { link: "path5", children: [], title: "page3", icon: "" },
            ],
            title: "table3",
            icon: "iconleftmenu_shit",
          },
          {
            link: "path6",
            children: [],
            title: "table4",
            icon: "iconleftmenu_hair",
          },
          {
            link: "path7",
            children: [],
            title: "table5",
            icon: "iconleftmenu_blood",
          },
        ];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    /**
     * @description: 切换菜单
     * @param {type}
     * @return:
     */
    selectMenu(type) {
      if (type && this.activeIndex && !this.status) {
        return this.$router.push(type);
      }
      this.$emit("type", type);
    },
  },
};
</script>
<style lang="scss">
.menu {
  height: 100%;
  position: relative;
  z-index: 2;
  .iconleftmenu_shit {
    margin-right: 11px !important;
  }
  .iconfont {
    font-size: 18px;
    margin-right: 15px;
    color: #000000a6;
    font-weight: 500;
  }
  .t-icon {
    cursor: pointer;
    color: #000000a6;
  }
  .el-menu--collapse {
    width: 65px !important;
    .el-submenu__title {
      span {
        display: none;
      }
    }
  }
  .el-menu {
    width: 240px;
    border-right: 0;
    height: 100%;
    .el-menu-item,
    .el-submenu__title {
      height: 48px !important;
      line-height: 48px !important;
      @include fh;
      &:hover {
        background: #cae1ff !important;
      }
    }
    .el-menu-item-group {
      .el-menu-item {
        padding-left: 57px !important;
        &.is-active {
          background: #0070f5 !important;
          color: white;
        }
      }
    }
    .el-menu-item {
      &:hover {
        background: #cae1ff !important;
      }
    }
    .el-menu-item-group__title {
      display: none;
    }
  }
}
</style>
