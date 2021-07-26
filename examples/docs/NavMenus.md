<!--
 * @Description: 菜单树
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:30:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 09:33:52
 -->

## 菜单树

垂直菜单，可内嵌子菜单。

:::demo

```html
<template>
  <div class="bi-menus t-menus">
    <div class="m-bottom16">
      <b-button @click="collapse = !collapse" type="info" class="m-bottom8"
        >展开 / 收起</b-button
      >
    </div>
    <b-menu
      :menus="menus"
      activeIndex="path2"
      :collapse="collapse"
      width="250"
      :status="true"
      @type="linkType"
    ></b-menu>
  </div>
  <div>
    <span>{{linkValue}}</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        linkValue: "",
        collapse: false,
        menus: [
          {
            link: "path1", // 跳转路径
            children: [], // 二级节点
            title: "table1", // 一级title
            icon: "iconbio_logo", // 一级图标
          },
          { link: "path2", children: [], title: "table2", icon: "iconshape" },
          {
            link: "table3",
            children: [
              { link: "page3", children: [], title: "page1", icon: "" },
              { link: "path4", children: [], title: "page2", icon: "" },
              { link: "path5", children: [], title: "page3", icon: "" },
            ],
            title: "table3",
            icon: "iconleftmenu_shit",
          },
        ],
      };
    },
    methods: {
      /**
       * @description: 获取点击路径
       * @param {*}
       * @return {*}
       */
      linkType(link) {
        console.log(link);
      },
    },
  };
</script>
```

:::

### Radio Events

| 事件名称    | 说明             | 回调参数 |
| ----------- | ---------------- | -------- |
| changeInput | 页面输入框值更改 | 输入框值 |

### Attributes

| 参数        | 说明         | 类型    | 可选值 | 默认值 |
| ----------- | ------------ | ------- | ------ | ------ |
| collapse    | 展开收起     | Bollean | -      | false  |
| activeIndex | 默认选中状态 | String  | -      | -      |
| menus       | 菜单列表     | String  | -      | -      |
| width       | 菜单树宽度   | Number  | -      | 240    |
| bgColor     | 菜单背景颜色 | String  | -      | #fff   |
