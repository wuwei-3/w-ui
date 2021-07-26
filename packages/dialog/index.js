/*
 * @Description: 弹窗
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 16:52:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-18 16:10:05
 */
import Index from "./src/index.vue";

Index.install = function(Vue) {
  Vue.component(Index.name, Index);
};

export default Index;
