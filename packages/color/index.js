/*
 * @Description: 颜色
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-11 15:42:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-14 14:38:45
 */
import Color from './src/color.vue';

Color.install = function(Vue) {
  Vue.component(Color.name, Color);
};

export default Color;
