<!--
 * @Description: 首页入口
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:43:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-18 15:03:20
 -->
<template>
  <div class="pg-index">
    <div class="index-container">
      <img src="../assets/logo.png" />
      <p>儿童脑智发育平台，公共UI 组件库</p>
    </div>
    <div class="separate-panel">
      <div class="about">
        <router-link :to="{ name: 'Giud' }" class="hvr-float-shadow"
          >开始使用</router-link
        >
        <a
          target="_blank"
          class="btn-github hvr-float-shadow"
          href="https://git.iflytek.com/HY_bp/biims-ui"
          >GitLab</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scope>
.pg-index {
  .index-container {
    width: 960px;
    margin: 0 auto;
    text-align: center;
    padding: 100px 0;
    p {
      margin-top: 56px;
      color: #8994c6;
      font-size: 32px;
    }
  }
  .separate-panel {
    position: relative;
    .about {
      position: absolute;
      width: 100%;
      height: 200px;
      top: 16px;
      z-index: 9;
      background: white;
      text-align: center;
      a {
        color: white;
        background-image: linear-gradient(90deg, #00aeff 0%, #3369e7 100%);
        box-shadow: 0 2px 6px 0 #3369e766;
        display: inline-block;
        width: 190px;
        height: 56px;
        margin: 0 35px;
        font-size: 18px;
        line-height: 56px;
        border-radius: 28px;
        transition: all 0.3s;
        cursor: pointer;
        text-decoration: none;
      }
      .btn-github {
        color: #316de9;
        border: 1px solid #2f6ee9;
        background: white;
        box-shadow: none;
      }
    }
  }
}
</style>
