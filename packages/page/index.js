/*
 * @Description: 分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 15:18:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 16:17:10
 */

import Page from './src/page.vue';

Page.install = function(Vue) {
  Vue.component(Page.name, Page);
};

export default Page;
