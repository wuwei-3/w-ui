<!--
 * @Description: 首页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 16:32:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 09:45:21
 -->
<template>
  <div class="home">
    <div class="e-top" v-if="$route.name !== 'index'">
      <span class="p-title" @click="$router.push('/')"
        ><img src="./assets/logo.png" />儿童脑智发育平台-BIUI</span
      >
      <div class="p-pos">
        <img src="./assets/gitlab.png" @click="linkGitlab" />
      </div>
    </div>
    <div class="e-bot">
      <div class="t-left el-scrollbar" v-if="$route.name !== 'index'">
        <el-scrollbar
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
        >
          <Left></Left>
        </el-scrollbar>
      </div>
      <div class="t-right el-scrollbar">
        <!-- 添加滚动 -->
        <el-backtop target=".t-right"></el-backtop>
        <el-scrollbar
          wrap-class="el-select-dropdown__wrap"
          view-class="el-select-dropdown__list"
        >
          <router-view></router-view>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "./components/side-nav.vue";
export default {
  name: "App",
  components: {
    Left,
  },
  data() {
    return {
      inputComponet: "",
    };
  },
  methods: {
    /**
     * @description: 跳转gitlab中
     * @param {*}
     * @return {*}
     */
    linkGitlab() {
      window.open("https://git.iflytek.com/HY_bp/biims-ui");
    },
  },
};
</script>
<style lang="scss">
.home {
  height: 100%;
  width: 1140px;
  padding: 16px;
  padding-top: 0;
  margin: 0 auto;
  background: $bi-grey_rey1;
  box-sizing: border-box;
  background-image: url("../examples/assets/bg.svg");
  /* 滚动条样式 */
  .el-scrollbar {
    height: 100%;
    .el-select-dropdown__wrap {
      max-height: none;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .e-top {
    height: 80px;
    background-color: $bi-grey_rey1;
    line-height: 80px;
    @include fh;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe652;
    position: relative;
    .p-search {
      position: absolute;
      right: 39px;
    }
    .p-title {
      font-weight: bold;
      font-size: 20px;
      color: $bi-core_main;
      @include fh;
      cursor: pointer;
      img {
        width: 41px;
        margin-right: 10px;
      }
    }
    .p-pos {
      position: absolute;
      right: 0;
      @include fh;
      img {
        width: 30px;
        cursor: pointer;
      }
      .s-drop {
        margin-right: 20px;
        .el-dropdown-link {
          cursor: pointer;
          color: $bi-core_main;
        }
        .el-dropdown {
          height: 32px;
          line-height: 32px;
        }
      }
      .s-input {
        margin-right: 20px;
      }
    }
  }
  .e-bot {
    height: calc(100% - 81px);
    width: 100%;
    display: flex;
    .t-left {
      width: 199px;
      height: 100%;
      overflow: auto;
      padding-right: 32px;
      .side-nav {
        overflow: auto;
        height: 100%;
      }
    }
    .t-right {
      flex: 1;
      height: 100%;
      color: $bi-app_color_main;
      font-size: 14px;
      font-weight: 400;
      position: relative;
      .hljs-attribute,
      .hljs-doctag,
      .hljs-keyword,
      .hljs-meta-keyword,
      .hljs-name,
      .hljs-selector-tag {
        font-weight: 500;
      }
      li {
        min-height: 28px;
        line-height: 28px;
        padding-left: 6px;
      }
      h1,
      h2,
      h3 {
        color: $bi-tag_color;
        font-weight: 500;
        font-size: 24px;
      }
      h1 {
        font-weight: bold;
        font-size: 30px;
        margin: 20px 0;
      }
      h3 {
        font-size: 18px;
      }
      p {
        color: $bi-app_color_main;
      }
      .k-height {
        > div {
          height: 38px;
          line-height: 38px;
        }
      }
      a {
        color: $bi-core_main;
      }
      code {
        width: 100%;
        line-height: 1.8;
        padding: 12px 20px;
        border: none;
        background: $bi-grey_rey2;
        margin: 0;
        font-size: 12px;
        color: $bi-core_black;
        margin-bottom: 10px;
        border-radius: 4px;
        display: inline-block;
        overflow-x: auto;
        box-sizing: border-box;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
        .hljs-selector-tag {
          color: $bi-selector_color;
        }
        .actionscript {
          .hljs-keyword,
          .hljs-comment {
            color: $bi-selector_color;
          }
        }
        .hljs {
          color: $bi-core_black;
        }
        .hljs-tag {
          color: $bi-selector_color;
          .hljs-name {
            color: $bi-selector_color;
          }

          .hljs-attr {
            color: $bi-selector_color;
          }
          .hljs-string {
            color: $bi-string_color;
          }
        }
      }
      section {
        table {
          border-collapse: collapse;
          width: 100%;
          background-color: $bi-core_white;
          font-size: 14px;
          margin-bottom: 45px;
          line-height: 1.5em;
          td,
          th {
            border-bottom: 1px solid $bi-app_border;
            padding: 15px;
            max-width: 250px;
          }
          th {
            text-align: left;
            white-space: nowrap;
            color: $bi-th_color;
            font-weight: normal;
          }
          td {
            color: $bi-td_color;
          }
          th:first-child,
          td:first-child {
            padding-left: 10px;
          }
        }
      }
    }
  }
}
</style>
