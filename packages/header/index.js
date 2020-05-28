/*
 * @Description: 公共头
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-11 15:42:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-14 15:48:36
 */
import Header from './src/header.vue';

Header.install = function(Vue) {
  Vue.component(Header.name, Header);
};

export default Header;
