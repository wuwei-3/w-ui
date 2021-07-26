<!--
 * @Description: 左侧导航栏
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 16:17:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-02 16:00:26
-->
<template>
  <div class="b-menus">
    <el-menu
      class="t-el-menu"
      :collapse="collapse"
      :background-color="bgColor"
      :unique-opened="true"
      :default-active="activeIndex"
      :popper-append-to-body="false"
      :collapse-transition="false"
      popper-class="t-popper-new"
      @select="selectMenu"
      :style="{ width: width + 'px' }"
    >
      <div v-for="menu in menus" :key="menu.id" class="i-menu">
        <el-submenu
          :index="menu.link"
          v-if="menu.children && menu.children.length != 0"
        >
          <template slot="title">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="'#' + menu.icon"></use>
            </svg>
            <!-- <i :class="'iconfont ' + menu.icon"></i> -->
            <span slot="title" class="e-title" :title="menu.title">{{
              menu.title
            }}</span>
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
          <!-- <i :class="'iconfont ' + menu.icon"></i> -->
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="'#' + menu.icon"></use>
          </svg>
          <span slot="title" class="e-title" :title="menu.title">{{
            menu.title
          }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'BMenus',
  props: {
    /* 自动展开 */
    collapse: {
      type: Boolean,
      default: false,
    },
    /* 默认选中 */
    activeIndex: {
      type: [String, Number],
      default: '',
    },
    /* 被禁颜色 */
    bgColor: {
      type: [String, Number],
      default: '#fff',
    },
    /* 是否自动跳转 */
    status: {
      type: Boolean,
      default: false,
    },
    /* 宽度 */
    width: {
      type: [String, Number],
      default: 240,
    },
    menus: {
      type: Array,
      default: () => {
        return [
          {
            link: 'path1',
            children: [],
            title: 'table1',
            icon: 'iconbio_logo',
          },
          { link: 'path2', children: [], title: 'table2', icon: 'iconshape' },
          {
            link: 'table3',
            children: [],
            title: 'table3',
            icon: 'iconleftmenu_shit',
          },
          {
            link: 'path6',
            children: [],
            title: 'table4',
            icon: 'iconleftmenu_hair',
          },
          {
            link: 'path7',
            children: [],
            title: 'table5',
            icon: 'iconleftmenu_blood',
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
      this.$emit('type', type);
    },
  },
};
</script>
<style lang="scss">
.b-menus {
  height: 100%;
  position: relative;
  z-index: 2;
  .iconleftmenu_shit {
    margin-right: 11px !important;
  }
  .icon {
    font-size: 16px;
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-right: 8px;
  }
  .iconfont {
    font-size: 16px;
    margin-right: 15px;
    color: #000000a6;
    font-weight: 500;
  }
  .e-title {
    display: inline-block;
    @include el;
  }
  .t-icon {
    cursor: pointer;
    color: #000000a6;
  }
  .el-menu--collapse {
    width: 65px !important;
    .el-submenu__title {
      span,
      .el-submenu__icon-arrow {
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
      // line-height: 48px !important;
      font-size: 16px;
      @include fh;
      &:hover {
        background: white !important;
        color: #0070f5;
        .iconfont {
          color: #0070f5;
        }
      }
    }
    .el-menu-item-group {
      .el-menu-item {
        padding-left: 57px !important;
        &.is-active {
          color: #0070f5;
          background: #f1f1f1;
        }
      }
    }
    .el-menu-item {
      &.is-active {
        color: #0070f5;
        background: #f1f1f1;
        background-color: #f1f1f1 !important;
      }
    }
    .el-menu-item-group__title {
      display: none;
    }
  }
}
</style>
