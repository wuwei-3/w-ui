<!--
 * @Description: 首页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 16:32:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-18 17:40:57
 -->
<template>
  <div class="home">
    <div class="e-top" v-if="$route.name !== 'index'">
      <span class="p-title" @click="$router.push('/')"
        ><img src="./assets/logo.png" />BIUI</span
      >
    </div>
    <div class="e-bot">
      <div class="t-left" v-if="$route.name !== 'index'"><Left></Left></div>
      <div class="t-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Left from './components/side-nav.vue';
export default {
  name: 'App',
  components: {
    Left,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
@mixin fh {
  display: flex;
  align-items: center;
}
.home {
  height: 100%;
  width: 1140px;
  padding: 0;
  margin: 0 auto;
  .e-top {
    height: 80px;
    background-color: white;
    line-height: 80px;
    @include fh;
    padding: 0 20px;
    border-bottom: 1px solid #dcdfe6;
    .p-title {
      font-weight: bold;
      font-size: 20px;
      color: #409eff;
      @include fh;
      cursor: pointer;
      img {
        width: 41px;
        margin-right: 10px;
      }
    }
  }
  .e-bot {
    height: calc(100% - 81px);
    width: 100%;
    display: flex;
    .t-left {
      width: 240px;
      height: 100%;
      overflow-x: auto;
    }
    .t-right {
      flex: 1;
      height: 100%;
      overflow: auto;
      color: #5e6d82;
      font-size: 14px;
      font-weight: 400;
      .k-height {
        > div {
          height: 38px;
          line-height: 38px;
        }
      }
      code {
        width: 100%;
        line-height: 1.3;
        font-size: 12px;
        padding: 15px;
        background-color: #fafafa;
        border: solid 1px #eaeefb;
        margin-bottom: 10px;
        border-radius: 4px;
        display: inline-block;
        overflow-x: auto;
        color: black;
        font-family: Menlo, Monaco, Consolas, Courier, monospace;
        .hljs-tag {
          height: 20px;
          line-height: 20px;
        }
      }
      table {
        border-collapse: collapse;
        width: 100%;
        background-color: white;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;
        td,
        th {
          border-bottom: 1px solid #dcdfe6;
          padding: 15px;
          max-width: 250px;
        }
        th {
          text-align: left;
          white-space: nowrap;
          color: #909399;
          font-weight: normal;
        }
        td {
          color: #606266;
        }
        th:first-child,
        td:first-child {
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
