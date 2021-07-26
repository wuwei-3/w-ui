/*
 * @Description:
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-02-06 16:19:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 10:45:23
 */
import Vue from "vue";
export default {}.install = (Vue, options = {}) => {
  Vue.directive("loadmore", {
    inserted(el, binding) {
      // 获取element-ui定义好的scroll盒子
      const SELECTDOWN_DOM = el.querySelector(
        ".el-select-dropdown .el-select-dropdown__wrap"
      );

      SELECTDOWN_DOM.addEventListener("scroll", function() {
        const CONDITION =
          this.scrollHeight - this.scrollTop <= this.clientHeight;

        if (CONDITION) {
          binding.value();
        }
      });
    },
  });
};
