/*
 * @Description: 弹窗
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 16:52:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 16:53:49
 */
import Dialog from './src/dialog';

Dialog.install = function(Vue) {
  Vue.component(Dialog.name, Dialog);
};

export default Dialog;
