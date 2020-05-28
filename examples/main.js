/*
 * @Description: 依赖使用
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 14:31:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-21 18:40:57
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.scss';
import './styles/hover.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './icons/iconfont.css';
// 导入组件库
import BIUI from '../packages';
Vue.use(ElementUI);

Vue.use(BIUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
