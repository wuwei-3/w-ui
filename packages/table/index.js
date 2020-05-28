/*
 * @Description:
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 17:27:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-18 17:28:14
 */
import Table from './src/table.vue';

Table.install = function(Vue) {
  Vue.component(Table.name, Table);
};

export default Table;
