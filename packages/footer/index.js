/*
 * @Description: 尾
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 15:03:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-18 16:10:35
 */
import Index from "./src/index.vue";

Index.install = function(Vue) {
  Vue.component(Index.name, Index);
};

export default Index;
