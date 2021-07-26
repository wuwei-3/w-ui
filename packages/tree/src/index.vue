<!--
 * @Description: 下拉框-加载更多
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-03-08 10:16:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 15:29:09
-->
<template>
  <div class="b-tree">
    <div class="e-input" v-show="showFiltertext">
      <el-input :placeholder="placeholder" v-model="filterText"> </el-input>
    </div>
    <el-tree
      :data="treeData"
      ref="tree"
      node-key="id"
      :props="defaultProps"
      :highlight-current="false"
      :current-node-key="nodeId"
      :expand-on-click-node="false"
      @node-click="handleNodeClick"
      :default-expand-all="expandAll"
      :show-checkbox="showCheckbox"
      :filter-node-method="filterNode"
    >
      <span slot-scope="{ node, data }" class="e-node">
        <span class="label e-title" :title="node.label">{{ node.label }}</span>
        <span class="icon" v-show="showIcon">
          <i class="el-icon-remove-outline" @click.stop="delNode(data)"></i>
          <i
            class="el-icon-circle-plus-outline"
            @click.stop="addNode(data)"
          ></i>
        </span>
      </span>
    </el-tree>
  </div>
</template>

<script>
export default {
  name: "BTree",
  components: {},
  props: {
    treeData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: "输入关键字进行过滤",
    },
    expandAll: {
      type: Boolean,
      default: true,
    },
    showFiltertext: {
      type: Boolean,
      default: true,
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "title",
      },
      nodeId: "",
      filterText: "",
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    /**
     * @description: 获取选中节点
     * @param {*}
     * @return {*}
     */
    getCheckedNodes() {
      return this.$refs.tree.getCheckedNodes();
    },
    /**
     * @description: 节点过滤
     * @param {*} value
     * @param {*} data
     * @return {*}
     */
    filterNode(value, data) {
      if (!value) {
        return true;
      }
      return data.title.indexOf(value) !== -1;
    },
    /**
     * @description: 设置节点
     * @param {*} list 节点Id
     * @return {*}
     */
    setCurrentKey(list) {
      this.$refs.tree.setCheckedKeys(list);
    },
    /**
     * @description: 当前点击节点数据
     * @param {*} node
     * @return {*}
     */
    handleNodeClick(node) {
      this.nodeId = node.id;
      this.$emit("click", node);
    },
    /**
     * @description: 删除节点按钮
     * @param {*} data
     * @return {*}
     */
    delNode(data) {
      this.nodeId = data.id;
      this.$emit("del", data);
    },
    /**
     * @description: 添加节点按钮
     * @param {*} data
     * @return {*}
     */
    addNode(data) {
      this.nodeId = data.id;
      this.$emit("add", data);
    },
  },
};
</script>
<style lang="scss">
//
.b-tree {
  width: 100%;
  height: 100%;
  .e-input {
    width: 100%;
    margin-bottom: 8px;
  }
  .el-tree-node__content {
    height: 38px;
    @include fh;
    position: relative;
    .e-title {
      max-width: 100px;
      @include el;
      display: inline-block;
    }
    .e-node {
      height: 100%;
      width: 100%;
      @include fh;
      .icon {
        display: inline-block;
        position: absolute;
        right: 0;
        display: none;
        i {
          font-size: 18px;
          margin-right: 8px;
        }
      }
    }
  }
  .el-tree-node__content:hover {
    .icon {
      display: block;
    }
  }
}
</style>
