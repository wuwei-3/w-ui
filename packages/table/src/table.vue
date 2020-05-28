<template>
  <!-- table 页面 -->
  <div class="table" :style="{ height: height }">
    <el-table
      :data="data"
      style="width: 100%;"
      :height="height"
      :highlight-current-row="true"
      :row-class-name="tableRowClassName"
      @row-click="rowClick"
      :header-cell-style="{
        background: background,
        color: background === '#6f7d95' ? 'white' : '#666',
      }"
      @selection-change="selectionChange"
    >
      <el-table-column type="selection" width="55" v-if="selection">
      </el-table-column>
      <el-table-column
        type="index"
        width="80px"
        v-if="indexT"
        label="序号"
        align="center"
      >
      </el-table-column>
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        v-for="(item, index) in column"
        :key="index"
        align="center"
      >
        <template slot-scope="scope">
          <div>
            <span :title="scope.row[item.prop]" class="t-span">{{
              scope.row[item.prop]
            }}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BTable',
  components: {},
  props: {
    getIndex: {
      type: Number,
      default: () => {
        return -1;
      },
    },
    selection: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    height: {
      type: String,
      default: '250px',
    },
    background: {
      type: String,
      default: '#fafafa',
    },
    indexT: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    data: {
      type: Array,
      default: () => {
        return [
          { name: '12', size: 'si123ze' },
          { name: '12', size: 'si123ze' },
        ];
      },
    },
    column: {
      type: Array,
      default: () => {
        return [
          { label: '数据库名', prop: 'name' },
          { label: '表空间名', prop: 'size' },
          { label: '总大小', prop: 'size' },
          { label: '已使用大小', prop: 'size' },
        ];
      },
    },
  },
  data() {
    return {
      checkRadio: -1,
      tableLoading: true,
      cources: [],
    };
  },
  methods: {
    /**
     * @description: 多选
     * @param {type}
     * @return:
     */
    selectionChange(val) {
      this.$emit('select', val);
    },

    /**
     * @description: 默认行样式
     * @param {type}
     * @return:
     */
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
      if (row.index === 0 && this.getIndex !== -1) {
        return 'current-row';
      }
    },

    /**
     * @description: 当行被点击
     * @param {type}
     * @return:
     */
    rowClick(val) {
      this.$emit('row', val);
    },
  },
};
</script>
<style lang="scss">
::-webkit-scrollbar {
  width: 0;
}
.table {
  width: 100%;
  position: relative;
  table {
    margin-bottom: 0 !important;
  }
  .el-table {
    position: absolute;
    height: 100%;
    td,
    th {
      padding: 0 !important;
      height: 48px;
      line-height: 48px;
      .cell {
        padding-left: 10px !important;
        text-align: center !important;
      }
    }
  }
}
</style>
