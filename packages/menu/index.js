/*
 * @Description: 左侧导航栏
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 16:17:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-18 16:22:50
 */
import Menu from './src/menu.vue';

Menu.install = function(Vue) {
  Vue.component(Menu.name, Menu);
};

export default Menu;
