<!--
 * @Description: 树形组件
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-04-06 14:33:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:35:10
-->

## Tree

用清晰的层级结构展示信息，可展开或折叠

:::demo

```html
<template>
  <div class="bi-tree">
    <b-tree
      @click="onclick"
      @add="onAdd"
      @del="onDel"
      :treeData="treeData"
      :showIcon="true"
      :expandAll="true"
      :showCheckbox="true"
      ref="bTree"
    ></b-tree>
    <div class="e-button">
      <b-button type="info" class="m-right16" @click="cancelJS"
        >取消选中</b-button
      >
      <b-button @click="checkJS" class="m-right16">选中江苏</b-button>
      <b-button @click="getCheckNodes">获取选中节点</b-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        treeData: [
          {
            title: "安徽省",
            id: 1,
            children: [
              { title: "宿州市", id: "1-1" },
              { title: "合肥市", id: "1-2" },
              { title: "安庆市", id: "1-3" },
            ],
          },
          { title: "江苏省", id: 2 },
          { title: "湖南省", id: 3 },
        ],
      };
    },
    methods: {
      /**
       * @description:
       * @param {*}
       * @return {*}
       */
      getCheckNodes() {
        let ids = this.$refs.bTree.getCheckedNodes();
        console.log("ids", ids);
      },
      /**
       * @description: 选中
       * @param {*}
       * @return {*}
       */
      checkJS() {
        this.$refs.bTree.setCurrentKey([2]);
      },
      /**
       * @description: 取消选中
       * @param {*}
       * @return {*}
       */
      cancelJS() {
        this.$refs.bTree.setCurrentKey([]);
      },
      /**
       * @description: 点击节点事件
       * @param {*}
       * @return {*}
       */

      onclick() {},
      /**
       * @description: 获取新增接口
       * @param {*}
       * @return {*}
       */

      onAdd() {
        // 新增
      },
      /**
       * @description: 删除新增接口
       * @param {*}
       * @return {*}
       */

      onDel() {
        // 删除
      },
    },
  };
</script>
```

:::

### Radio Events

| 事件名称 | 说明     | 回调参数     |
| -------- | -------- | ------------ |
| del      | 删除节点 | 当前节点数据 |
| add      | 信息节点 | 当前节点数据 |

### 注意 设置节点，取消节点，获取选中节点数据使用 ref 函数方法进行获取

### Attributes

| 参数           | 说明                   | 类型    | 可选值 | 默认值 |
| -------------- | ---------------------- | ------- | ------ | ------ |
| placeholder    | 模糊搜索输入框占位     | String  | -      | -      |
| expandAll      | 是否默认全部展开       | Boolean | -      | true   |
| showIcon       | 右侧新增，删除图标展示 | Boolean | -      | true   |
| showFiltertext | 搜索框是否展示         | Boolean | -      | true   |
| showCheckbox   | 是否开启复选框功能     | Boolean | -      | true   |
