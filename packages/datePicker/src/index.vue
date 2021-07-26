<!--
 * @Description: 分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 15:19:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-31 15:32:04
-->
<template>
  <div class="dataPicker h-time">
    <span class="e-span">预约日期</span><span class="e-r">|</span>
    <el-date-picker
      v-model="dataTime"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      clearable
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      :picker-options="pickerOptions"
      @change="getTime"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "BDate",
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          let _now = Date.now();

          return time.getTime() > _now;
        },
      },
      dataTime: "",
    };
  },
  methods: {
    /**
     * @description:
     * @param {*}
     * @return {*}
     */
    getTime(val) {
      this.$emit("time", val);
    },
  },
};
</script>
<style lang="scss">
//@import ''; //引入公共css类
.h-time,
.h-input {
  @include fh;
  margin-right: 16px;
  width: 300px;
}
.h-input {
  width: 200px;
}
.h-time {
  position: relative;
  width: 433px;
  .el-range-editor.el-input__inner {
    width: 346px;
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
</style>
