/*
 * @Description: 字体
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-11 15:42:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-14 11:24:18
 */
import Font from './src/font';

Font.install = function(Vue) {
  Vue.component(Font.name, Font);
};

export default Font;
