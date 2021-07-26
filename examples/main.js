/*
 * @Description: 依赖使用
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 14:31:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-06-01 14:26:07
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "./icons/iconfont.css";
import "./styles/modules/hover.css";
import "./theme/element-variables.scss";
import loadMore from "./utils/loadMore";
import demoBlock from "./components/demo-block.vue";
import "./demo-styles/index.scss";
import hljs from "highlight.js";
import "./styles/index.scss";

// 导入组件库
import BIUI from "../packages";


Vue.use(ElementUI);
Vue.use(BIUI);
Vue.use(loadMore);
Vue.component("demo-block", demoBlock);

/* 语法高亮 */
router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");

    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
