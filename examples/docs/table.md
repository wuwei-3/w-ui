<!--
 * @Description: 公共Table
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:30:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-19 14:44:47
 -->

### 表格

```html
    <b-table getIndex='0' :indexT="true" :selection="true">></b-table>
```

### 表格示例

  <b-table getIndex='0' :indexT="true" :selection="true"></b-table>

### column 参数说明

```js

  /* label 列名，name 对应列字段 */
   column = [
      { label: '数据库名', prop: 'name' }, 
      { label: '表空间名', prop: 'size' },
      { label: '总大小', prop: 'size' },
      { label: '已使用大小', prop: 'size' },
    ];
```
### Radio Events
| 事件名称 | 说明              | 回调参数 |
| -------- | ----------------- | -------- |
| select   | 多选框选中结果 [] | 选中条数 |
| row      | 点击当前行数据 {} | 当前行   |

### Attributes

| 参数       | 说明           | 类型    | 可选值 | 默认值  |
| ---------- | -------------- | ------- | ------ | ------- |
| getIndex   | 定位行选中颜色 | Number  | -      | -1      |
| selection  | 是否有复选框   | Number  | -      | false   |
| height     | 高度           | String  | -      | 250     |
| background | 表头背景       | String  | -      | #fafafa |
| indexT     | 是否显示序号   | Boolean | -      | false   |
| data       | 表数据         | Array   | -      | -       |
| column     | 表头名称       | Array   | -      | -       |