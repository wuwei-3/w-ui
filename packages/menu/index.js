/*
 * @Description: 左侧导航栏
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 16:17:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-18 16:08:26
 */
import Index from "./src/index.vue";

Index.install = function(Vue) {
  Vue.component(Index.name, Index);
};

export default Index;
