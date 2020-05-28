/*
 * @Description: 导出全部组件
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:19:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-18 17:49:04
 */
import Button from './button';
import Font from './font';
import Color from './color';
import Header from './header';
import Footer from './footer';
import Page from './page';
import Input from './input';
import Menu from './menu';
import Dialog from './dialog';
import Table from './table';
/* 存储组件 */
const components = [
  Button,
  Font,
  Color,
  Header,
  Footer,
  Page,
  Input,
  Menu,
  Dialog,
  Table,
];

/* 注册所有组件 */
const install = function(Vue) {
  /* 判断是否可以安装 */
  if (install.installed) {
    return;
  }
  /* 遍历所有组件 */
  components.map((component) => Vue.component(component.name, component));
};

//
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* 导出组件 */
export default {
  install,
  ...components,
};
