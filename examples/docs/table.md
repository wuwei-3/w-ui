<!--
 * @Description: 公共Table
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:30:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-26 11:26:39
 -->

## 表格

功能强大，插拔自如，通过 slot 对表格动态展示数据。

::: demo

```html
<template>
  <div class="b-table">
    <div class="b-fh m-bottom16">
      <b-button type="info" class="m-right16" @click="columeClass= 'left'"
        >靠左</b-button
      >
      <b-button type="info" class="m-right16" @click="columeClass= 'center'"
        >居中</b-button
      >
      <b-button type="info" class="m-right16" @click="columeClass= 'right'"
        >靠右</b-button
      >
      <b-button type="info" class="m-right16" @click="selection = !selection"
        >多选</b-button
      >
      <b-button type="info" class="m-right16" @click="indexT = !indexT"
        >序号</b-button
      >
      <b-button type="info" class="m-right16" @click="getIndex = 1"
        >选中1行</b-button
      >
      <b-button type="info" class="m-right16" @click="getIndex = 2"
        >选中2行</b-button
      >
      <b-button type="info" class="m-right16" @click="getIndex = 0"
        >取消选中</b-button
      >
    </div>
    <b-table
      :column="column"
      :data="dataList"
      :columeClass="columeClass"
      :selection="true"
      height="200px"
      :indexT="indexT"
      :getIndex="getIndex"
      @sort="sortChange"
      @select="onSelect"
      ref="table"
      @table="getRefTable"
    >
      <template v-slot:detail="row">
        <el-link type="primary" @click="editChild(row.row)">修改</el-link>
        <el-link type="danger" @click="editChild(row.row)" class="m-left12"
          >删除</el-link
        >
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        getIndex: 0,
        indexT: true,
        selection: false,
        columeClass: "center",
        /* 表格头内容 unit：单位，method：字段格式化（支持html语法），slot：通过插入添加按钮等 */
        column: [
          { label: "姓名", prop: "name" },
          { label: "姓别", prop: "gender", method: this.gender },
          { label: "年龄", prop: "size", unit: "岁" },
          { label: "家庭住址", prop: "address" },
          { label: "手机号", prop: "phone" },
          { label: "姓别", prop: "gender", method: this.gender, sort: true },
          { label: "操作", slot: "detail" },
        ],
        /* 表格需要数据 */
        dataList: [
          {
            name: "无味",
            gender: "M",
            size: 11,
            address: "安徽-宿州",
            phone: "19955797645",
          },
          {
            name: "liangzhang",
            gender: "-",
            size: 0,
            address: "安徽-合肥",
            phone: "",
          },
        ],
        refTable: {},
      };
    },
    mounted() {
      console.log();
    },
    methods: {
      /**
       * @description:
       * @param {*}
       * @return {*}
       */

      getRefTable(ref) {
        this.refTable = ref;
      },
      /**
       * @description: 多选
       * @param {*}
       * @return {*}
       */
      onSelect() {
        /* 两秒后去除多选 */
        setTimeout(() => {
          this.refTable.clearSelection();
        }, 2000);
      },
      /**
       * @description:
       * @param {*} prop 排序字段
       * @param {*} sort 排序方式
       * @return {*}
       */

      sortChange(prop, sort) {
        console.log(11, prop, sort);
      },
      /**
       * @description: 格式化性别
       * @param {*}
       * @return {*}
       */

      gender(val) {
        return val.gender === "M" ? "男" : "女";
      },
    },
  };
</script>
<style lang="scss">
  //
  .b-table {
    height: 250px;
    /* 去除markdown默认样式 */
    th,
    td {
      border-bottom: 1px solid #f2f2f2 !important;
      padding: 12px 0 !important;
      max-width: none !important;
    }
    .el-link--danger {
      color: $bi-core_error !important;
    }
  }
</style>
```

:::

### Radio Events

| 方法名 | 说明                                                                  | 参数      |
| ------ | --------------------------------------------------------------------- | --------- |
| row    | 表格单选，选中当前行信息                                              | row       |
| select | 表格多选，选中数组信息                                                | selection |
| table  | 表格初始化获取表格整个 refs 对象, 可对表格进行一些 Table Methods 处理 | ref       |

### Attributes

| 参数        | 说明                     | 类型    |      可选值       |  默认值   |
| ----------- | ------------------------ | ------- | :---------------: | :-------: |
| data        | 列表现实的数据           | Array   |         -         |    []     |
| column      | 列表头内容               | Array   |         -         |     -     |
| indexT      | 是否启用 “序号” 列       | Boolean |         -         |   true    |
| height      | 表格内容高度             | String  |         -         |  “100%”   |
| color       | 列表头文字颜色           | String  |         -         |  “#666”   |
| bgColor     | 列表头背景颜色           | String  |         -         | “#fafafa” |
| selection   | 是否启动 “复选框按钮” 列 | Boolean |         -         |   false   |
| getIndex    | 自动选中行坐标           | Number  |         -         |    -1     |
| columeClass | 对齐方式                 | String  | left,center,right |  center   |
