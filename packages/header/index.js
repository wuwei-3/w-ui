/*
 * @Description: 公共头
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-11 15:42:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-18 16:10:47
 */
import Index from "./src/index.vue";

Index.install = function(Vue) {
  Vue.component(Index.name, Index);
};

export default Index;
