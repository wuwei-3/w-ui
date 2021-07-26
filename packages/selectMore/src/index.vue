<!--
 * @Description: 下拉框-加载更多
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-03-08 10:16:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 11:22:02
-->
<template>
  <div class="bi-select-more">
    <el-select
      v-model="value"
      :placeholder="placeholder"
      v-loadmore="loadMore"
      remote
      filterable
      reserve-keyword
      clearable
      :remote-method="remoteMethod"
      popper-class="simple-select"
    >
      <el-option
        v-for="school in options"
        :key="school.value"
        :label="school.label"
        :value="school.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "BSelect",
  data() {
    return {
      value: "",
      pageValue: 0,
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "请选择内容",
    },
    defaultValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  watch: {
    defaultValue(val) {
      this.value = val;
    },
    value(val) {
      if (!val) {
        this.$emit("remoteMethod", { page: 1, value: "" });
      }
    },
  },
  mounted() {
    this.value = this.defaultValue;
  },
  methods: {
    /**
     * @description: 自定义模糊搜索
     * @param {*}
     * @return {*}
     */
    remoteMethod(val) {
      this.$emit("remoteMethod", { page: this.pageValue, value: val });
    },
    /**
     * @description: 下拉加载更多
     * @param {*}
     * @return {*}
     */
    loadMore() {
      this.pageValue++;
      this.$emit("remoteMethod", { page: this.pageValue, value: "" });
    },
  },
};
</script>
<style lang="scss">
//
.bi-select-more {
  width: 100%;
  margin-bottom: 16px;
  position: relative;
  display: flex;
  align-items: center;
}
</style>
