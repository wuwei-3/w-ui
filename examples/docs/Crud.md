<!--
 * @Description: 公共分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:15:05
 -->

## 公共增删改成（正在开发中）

包含基本增删改查，快速搭建页面，<span class="bi-color-error">使用中仅使用基本框架即可</span>

<!--
 * @Description: 历史上传
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-06-29 15:30:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-01 10:37:28
-->

:::demo

```html
<template>
  <div class="upload">
    <div class="d-search">
      <div class="h-select">
        <span>施测包：</span>
        <el-select v-model="packageId" placeholder="请选择施测包" clearable>
          <el-option
            v-for="item in packageIdOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="h-select2">
        <span>样本状态：</span>
        <el-select v-model="lost" clearable>
          <el-option
            v-for="item in lostOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="h-btn b-fh">
        <b-button width="96" class="m-right16">查询</b-button>
      </div>
    </div>
    <div class="d-table" v-loading="loading">
      <b-table
        :column="column"
        :data="tableData"
        height="100%"
        :getIndex="getIndex"
        bgColor="#fafafa"
      >
        <template v-slot:detail="row">
          <el-link type="primary">查看详情</el-link>
        </template>
      </b-table>
    </div>
    <div class="d-page">
      <b-page
        :size="params.size"
        :page="params.page"
        :total="total"
        @size="pageSize"
        @page="pageNum"
      ></b-page>
    </div>
  </div>
</template>

<script>
  export default {
    name: "upload",
    data() {
      return {
        packageId: "",
        lost: null,
        lostOptions: [
          { label: "全部", value: null },
          { label: "样本正常", value: 1 },
          { label: "样本缺失", value: 2 },
          { label: "样本量不足", value: 3 },
        ],
        packageIdOptions: [],
        column: [
          { label: "姓名", prop: "subjectName" },
          { label: "性别", prop: "gender", method: this.gender },
          { label: "施测包", prop: "packageId" },
          { label: "采集阶段", prop: "colLostList", method: this.formartType },
          {
            label: "分装阶段",
            prop: "splitLostList",
            method: this.formartType2,
          },
          { label: "操作", slot: "detail" },
        ],
        loading: false,
        parStatus: true,
        restStatus: true,
        pickerOptions: {
          disabledDate(time) {
            let _now = Date.now();

            return time.getTime() > _now;
          },
        },
        visable: false,
        tableData: [{}],
        total: 0,
        params: {
          packageId: null,
          lost: null,
          subjectMsg: null,
          page: 1,
          size: 15,
          sort: null,
        },
        dataTime: [],
        detaillist: {},
        typeList: [],
      };
    },
    watch: {
      packageId(newl) {
        if (!newl) {
          this.params.size = 15;
          this.params.page = 1;
          this.getData(this.params);
        }
      },
      lost(newl) {
        if (!newl) {
          this.params.size = 15;
          this.params.page = 1;
          this.getData(this.params);
        }
      },
    },
    mixins: [],
    mounted() {},
    methods: {
      /**
       * @description: 格式化字段
       * @param {*}
       * @return {*}
       */
      formartType(par) {
        let val = par.colLostList;

        if (val && val.length !== 0) {
          let str = "";

          val.forEach((item) => {
            str = this.formart(item);
          });
          return str || "-";
        }
        return "-";
      },
      /**
       * @description: 格式化字段
       * @param {*}
       * @return {*}
       */
      formartType2(par) {
        let val = par.splitLostList;

        let str;

        if (val && val.length !== 0) {
          val.forEach((item) => {
            str = item.subtypeName;
          });
          return str || "-";
        }
        return "-";
      },
      /**
       * @description: 真正格式化
       * @param {*}
       * @return {*}
       */
      formart(val) {
        for (let i = 0; i < this.typeList.length; i++) {
          if (val.stateTag === this.typeList[i].stateTag) {
            return this.typeList[i].name;
          }
        }
      },
    },
  };
</script>
<style lang="scss">
  .upload {
    width: 100%;
    background: #f3f3f3;
    height: 700px;
    padding: 8px 16px;
    box-sizing: border-box;
    .d-dialog {
      .el-dialog__footer {
        display: none;
      }
      .el-dialog__body {
        padding: 0 16px;
        box-sizing: border-box;
        text-align: left;
        line-height: normal;
        font-weight: 400;
        .g-main {
          font-size: 14px;
          padding-bottom: 16px;
          .n-title {
            height: 40px;
            @include fh;
            font-weight: 550;
            position: relative;
            .n-icon {
              position: absolute;
              right: 0;
              cursor: pointer;
              font-size: 18px;
            }
          }
          .n-files {
            min-height: 40px;
            background: #fafafa;
            border-radius: 4px;
            @include fh;
            flex-wrap: wrap;
            .s-span {
              padding: 0 16px;
              color: #000000a6;
              display: inline-block;
              height: 40px;
              line-height: 40px;
              i {
                margin-right: 5px;
              }
            }
          }
          .n-message {
            overflow: auto;
            .e-header,
            .e-list {
              height: 40px;
              @include fh;
              background: #fafafa;
              border-radius: 4px;
              font-weight: 500;
              padding-left: 16px;
              color: #000000d9;
              @include el;
              span {
                @include el;
              }
            }
            .e-header {
              font-weight: 550;
            }
            .t-par {
              background: white;
              width: 46% !important;
              float: left;
              .t-left {
                width: 100%;
                display: flex;
                :first-child {
                  width: 217px;
                }
                :last-child {
                  flex: 1;
                }
                span {
                  @include el;
                }
              }
            }
          }
        }
      }
    }
    .d-search {
      height: 72px;
      padding: 0 15px;
      @include fh;
      margin-bottom: 16px;
      background: white;
      width: 100%;
      box-sizing: border-box;
      .h-select,
      .h-select2 {
        margin-right: 16px;
        .el-select {
          width: 160px;
        }
      }
      .h-select2 {
        .el-select {
          width: 104px;
        }
      }
      .h-time,
      .h-input {
        @include fh;
        width: 300px;
      }
      .h-time {
        position: relative;
        width: 417px;
        .el-range-editor.el-input__inner {
          width: 330px;
          border-radius: 0;
          border-left: 0;
          padding-left: 30px;
          padding-right: 0;
        }
        .el-date-editor .el-range__icon {
          position: absolute;
          left: -76px;
          z-index: 11;
        }
        .el-date-editor .el-range-input {
          width: 123px;
        }
        .e-r {
          position: absolute;
          left: 103px;
          z-index: 3;
          color: #00000059;
        }
        .e-span {
          border: 1px solid #dcdfe6;
          height: 38px;
          line-height: 38px;
          padding-left: 30px;
          border-right: 0;
          color: #00000059;
          display: inline-block;
          white-space: nowrap;
        }
        .el-range-editor.is-active,
        .el-range-editor.is-active:hover {
          border: 1px solid #dcdfe6;
          border-left: 0;
        }
      }
      .n-search,
      .n-reset {
        width: 96px;
        height: 40px;
        background: #0070f5;
        border-radius: 4px;
        color: white;
      }
      .n-reset {
        background: white;
        border: 1px solid #bfdbfc;
        color: #0070f5;
      }
      .h-input {
        width: 200px;
      }
    }
    .d-page {
      @include fh;
      background: white;
      padding: 0 16px;
    }
    .el-table__body-wrapper {
      background: white !important;
    }
    .d-table {
      height: calc(100% - 124px);
      background: white;
      padding: 16px;
      padding-bottom: 0;
      box-sizing: border-box;
      width: 100%;
      .el-table td,
      .el-table th {
        padding: 0;
        height: 48px;
      }
      tr {
        background-color: white !important;
      }
    }
  }
</style>
```

:::
