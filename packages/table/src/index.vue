<template>
  <!-- table 页面 -->
  <div class="table-web" :style="{ height: height }">
    <el-table
      :data="data"
      style="width: 100%;"
      :height="height"
      :highlight-current-row="true"
      :row-class-name="tableRowClassName"
      @row-click="rowClick"
      :show-overflow-tooltip="true"
      :header-cell-style="{
        background: bgColor,
        color: color,
      }"
      @selection-change="selectionChange"
      @sort-change="sortChange"
      ref="biTable"
    >
      <!-- 多选框 -->
      <el-table-column
        type="selection"
        width="55"
        v-if="selection"
        fixed="left"
        align="left"
      >
      </el-table-column>
      <!-- 序号 -->

      <el-table-column
        type="index"
        width="80px"
        label="序号"
        fixed="left"
        v-if="indexT"
        :align="columeClass"
      >
      </el-table-column>
      <!-- 业务逻辑代码 -->
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        v-for="(item, index) in column"
        :key="index"
        :align="columeClass"
        :class-name="'tui-' + columeClass"
        :fixed="item.fixed ? item.fixed : null"
        :sortable="item.sort ? true : false"
      >
        <template slot-scope="scope">
          <div>
            <!-- 普通formart格式化 -->
            <div v-if="item.method">
              <span v-html="formart(item, scope.row, item.prop)"></span>
            </div>
            <!-- 操作按钮通过插槽控制 -->
            <div v-else-if="item.slot">
              <slot :name="item.slot" v-bind:row="scope.row"></slot>
            </div>
            <!-- 正常数据展示 -->
            <div v-else>
              <span
                v-if="
                  [null, undefined, ''].indexOf(scope.row[item.prop]) !== -1
                "
                >{{ "-" }}</span
              >
              <span v-else>{{
                scope.row[item.prop] + (item.unit ? " " + item.unit : "")
              }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "BTable",
  props: {
    /* 选中行坐标，默认不选中 */
    getIndex: {
      type: Number,
      default: () => {
        return -1;
      },
    },
    /* 多选框展示 */
    selection: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    /* 列名 */
    columeClass: {
      type: String,
      default: "center",
    },
    /* head背景色 */
    bgColor: {
      type: String,
      default: () => {
        return "#fafafa";
      },
    },
    /* head字体颜色 */
    color: {
      type: String,
      default: () => {
        return "#666";
      },
    },
    /* content表格高度 */
    height: {
      type: String,
      default: () => {
        return "100%";
      },
    },
    /* 序号列表是否展示，默认展示 */
    indexT: {
      type: Boolean,
      default: () => {
        return true;
      },
    },
    /* 列表展示结果 */
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    /* head内容 */
    column: {
      type: Array,
      default: () => {
        return [
          { label: "测试1", prop: "name" },
          { label: "测试2", prop: "size" },
          { label: "测试3", prop: "size" },
          { label: "测试4", prop: "size" },
        ];
      },
    },
  },
  data() {
    return {
      refTable: {},
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit("table", this.$refs.biTable);
    });
  },
  methods: {
    /**
     * @description: 开始排序
     * @param {*}
     * @return {*}
     */
    sortChange(column) {
      let or = column.order === "descending" ? "desc" : "asc";

      this.$emit("sort", column.prop, or);
    },
    /**
     * @description:
     * @param {type}
     * @return {type}
     */
    formart(item, row, prop) {
      return item.method(row, prop);
    },
    /**
     * @description: 自动选中行样式更改
     * @param {type}
     * @return:
     */
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
      if (this.getIndex !== -1 && row.index === this.getIndex - 1) {
        return "current-row";
      }
    },
    /**
     * @description: 当行被点击
     * @param {type}
     * @return:
     */
    rowClick(val) {
      this.$emit("row", val);
    },

    /**
     * @description: 多选
     * @param {type}
     * @return:
     */
    selectionChange(val) {
      this.$emit("select", val);
    },
  },
};
</script>
<style lang="scss">
.table-web {
  width: 100%;
  height: 500px;
  position: relative;
  table {
    margin-bottom: 0 !important;
  }
  .el-table {
    position: absolute;
    height: 500px;
    /* 鼠标移入颜色 */
    .el-table__body tr:hover > td {
      background-color: #e6efff !important;
    }
    .is-center {
      text-align: center !important;
    }
    .is-right {
      text-align: right !important;
    }
    td {
      padding: 0;
      height: 48px;
      line-height: 48px;
      .cell {
        @include fh;
        > div {
          width: 100%;
        }
      }
    }
    .tui-center {
      .cell {
        justify-content: center;
      }
    }
    .tui-left {
      .cell {
        justify-content: flex-start;
      }
    }
    .tui-right {
      .cell {
        justify-content: flex-end;
      }
    }
  }
}
</style>
