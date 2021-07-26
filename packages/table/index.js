/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 17:27:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-18 16:08:04
 */
import Index from "./src/index.vue";

Index.install = function(Vue) {
  Vue.component(Index.name, Index);
};

export default Index;
