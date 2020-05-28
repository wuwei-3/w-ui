<!--
 * @Description: 输入框
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 13:49:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-21 18:48:51
-->
<template>
  <div class="input">
    <el-input
      v-model="inputOut"
      :placeholder="placeholder"
      @input="changeInput"
      :style="{ width: width, height: height }"
      clearable
      :maxlength="maxlength"
      :disabled="disabled"
      :ref="bFocus"
    ></el-input>
  </div>
</template>

<script>
let timeOut = null;

export default {
  name: 'BInput',
  props: {
    bFocus: {
      type: String,
      default: 'bFocus',
    },
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    input: {
      type: String,
      default: '',
    },
    debounce: {
      type: Number,
      default: 1000,
    },
    maxlength: {
      type: Number,
      default: 20,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputOut: '',
    };
  },
  methods: {
    /**
     * @description: 输入框改变,延迟获取
     * @param {input}
     * @return:
     */
    changeInput(input) {
      if (timeOut) {
        clearTimeout(timeOut);
      }
      timeOut = setTimeout(() => {
        this.$emit('changeInput', input);
        console.log(input);
      }, this.debounce);
    },
  },
};
</script>
<style lang="scss" scoped>
//@import ''; //引入公共css类
.input {
  width: 250px;
}
</style>
