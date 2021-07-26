<!--
 * @Description: 页面头部公共内容
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:30:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:37:09
 -->

## 头部组件

通用头部组件，可动态改变图标，页面路径参数，背景等。

<span class="bi-color-error">需要注意的是，路由文件需要$route.meta.index, 用于默认选中菜单,如果有二级菜单则需要$route.meta.childIndex</span>

::: demo

```html
<template>
  <div>
    <b-header :menus="menuList" @childMenus="onMenus">
      <i class="iconfont iconeth_logo01 r-icon" slot="icon"></i>
      <span slot="title" class="r-title">生物样本采集系统</span>
      <span slot="message" class="r-message"
        >欢迎您，{{ "科大讯飞用户 张亮" }}
        <span class="r-out">退出</span>
      </span>
    </b-header>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menuList: [
          { name: "page1", path: "", childs: [] },
          {
            name: "page2",
            path: "",
            childs: [
              { name: "粪便样本", path: "" },
              { name: "尿液样本", path: "" },
            ],
          },
        ],
        pageIndex: "",
      };
    },
    methods: {
      /**
       * @description: 获取跳转地址
       * @param {*}
       * @return {*}
       */
      onMenus(menu) {
        console.log("menu", menu);
      },
    },
  };
</script>
```

:::

### Attributes

| 参数    | 说明     | 类型   | 可选值 | 默认值                    |
| ------- | -------- | ------ | ------ | ------------------------- |
| icon    | 图标     | String | -      | -                         |
| title   | 标题     | String | -      | -                         |
| bgColor | 背景     | String | -      | #0070f5                   |
| color   | 字体颜色 | String | -      | white                     |
| menus   | 菜单列表 | Array  | -      | 格式：[{name:'',path:''}] |

### 注意事项

菜单接口刷新后需重新获取接口避免数据丢失
