<!--
 * @Description: 分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 15:19:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 16:50:22
-->
<template>
  <div class="page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="sizes"
      :page-size="size"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'BPage',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 15,
    },
    page: {
      type: Number,
      default: 1,
    },
    sizes: {
      type: Array,
      default: () => {
        return [15, 30, 50, 100];
      },
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    /**
     * @description: 条数
     * @param {type}
     * @return:
     */
    handleSizeChange(val) {
      this.$emit('size', val);
    },
    /**
     * @description: 页数
     * @param {type}
     * @return:
     */
    handleCurrentChange(val) {
      this.$emit('page', val);
    },
  },
};
</script>
<style lang="scss" scoped>
//@import ''; //引入公共css类
.page {
  width: 100%;
  height: 30px;
  .el-pagination {
    float: right;
  }
}
</style>
