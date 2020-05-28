<!--
 * @Description: 公共头
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:30:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-18 13:47:35
 -->

### 头部组件

#### 注意引用时需要添加slot属性

  <b-header :menus="[{name:'page1',path:''},{name:'page2',path:''}]">
    <i class="iconfont iconeth_logo01 r-icon" slot="icon"></i>
    <span slot="title" class="r-title" >生物样本采集系统</span>
    <span slot="message" class="r-message" >欢迎您，{{'科大讯飞用户 张亮'}}</span>
  </b-header>

```html
 <b-header :menus="[{name:'page1',path:''},{name:'page2',path:''}]">
    <i  slot="icon" class="iconfont iconeth_logo01 r-icon"></i>
    <span slot="title" class="r-title" >生物样本采集系统</span>
    <span slot="message" class="r-message" >欢迎您，{{'科大讯飞用户 张亮'}}</span>
  </b-header>
```

```js
/* 路由文件格式必须统一 */
exprot default [
  {
    path: '/test',
    name: 'test',
    meta: {
      index: 0, // 每个路由页面必须有index，用于选中效果和刷新页面防止丢失
    },
    component: () => import('@/views/index.vue'), 
  }
]
```
### Radio Value
| SessionStroge | 说明                 | 回调参数   |
| ------------- | -------------------- | ---------- |
| childMenus    | 切换菜单获取子菜单值 | 当前子菜单 |

### Attributes

| 参数  | 说明     | 类型   | 可选值 | 默认值                    |
| ----- | -------- | ------ | ------ | ------------------------- |
| icon  | 图标     | String | -      | -                         |
| title | 标题     | String | -      | -                         |
| menus | 菜单列表 | Array  | -      | 格式：[{name:'',path:''}] |