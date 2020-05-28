<!--
 * @Description: 菜单树
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:30:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-19 14:32:55
 -->

### 菜单树

<b-menu></b-menu>

```js
/* 请参考如下数据格式 */
menus:[
  {
    link: 'path1', // 跳转路径
    children: [], // 二级节点
    title: 'table1', // 一级title
    icon: 'iconbio_logo', // 一级图标
  },
  { link: 'path2', children: [], title: 'table2', icon: 'iconshape' },
  {
    link: 'table3',
    children: [
      { link: 'page3', children: [], title: 'page1', icon: '' },
      { link: 'path4', children: [], title: 'page2', icon: '' },
      { link: 'path5', children: [], title: 'page3', icon: '' },
    ],
    title: 'table3',
    icon: 'iconleftmenu_shit',
  },
]
```
### Radio Events
| 事件名称    | 说明             | 回调参数 |
| ----------- | ---------------- | -------- |
| changeInput | 页面输入框值更改 | 输入框值 |


### Attributes

| 参数        | 说明         | 类型   | 可选值 | 默认值 |
| ----------- | ------------ | ------ | ------ | ------ |
| visable     | 展开收起     | String | -      | false  |
| activeIndex | 默认选中状态 | String | -      | -      |
| menus       | 菜单列表     | String | -      | -      |