<!--
 * @Description: 卡片样式
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-15 15:19:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-01 19:24:02
-->
<template>
  <div>
    <!-- card1 -->
    <div
      :class="['card', check ? 'd-active' : '']"
      :style="{ background: bgColor }"
      v-if="type == 1"
      @click="onClick"
    >
      <span :title="params.left">{{ params.left }}</span>
      <span>{{ params.center }}</span>
      <i
        :class="params.right"
        :title="params.desc"
        v-show="params.disabled"
      ></i>
    </div>
    <!-- card2 -->
    <div
      :class="['cards', check ? 'd-actives' : '']"
      :style="{ background: bgColor }"
      v-if="type == 2"
      @click="onClick"
    >
      <div class="s-row1">{{ params.title }}</div>
      <div class="s-row2">
        <span>站点</span>
        <span>预约日期</span>
      </div>
      <div class="s-row3">
        <span>{{ params.siteName }}</span>
        <span>{{ params.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BCard",
  props: {
    params: {
      type: Object,
      default: () => {
        return {
          left: "123456777",
          center: "dpsajc",
          right: "el-icon-edit",
          desc: "测试",
          disabled: true,
        };
      },
    },
    bgColor: {
      type: [String, Number],
      default: "#f1f1f1",
    },
    type: {
      type: [String, Number],
      default: 1,
    },
    check: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>
<style lang="scss" scoped>
//@import ''; //引入公共css类
.card {
  width: 246px;
  height: 48px;
  border-radius: 2px;
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  color: #000000a6;
  font-family: Consolas, Courier New, Microsoft YaHei, 微软雅黑, Arial,
    sans-serif;
  :first-child {
    font-size: 16px;
    font-weight: 500;
    width: 80px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 8px;
  }
  :nth-child(2) {
    font-size: 14px;
    height: 24px;
    background: #ccc;
    padding: 0 5px;
    line-height: 24px;
  }
  :nth-child(3) {
    flex: 1;
    text-align: right;
    cursor: pointer;
  }
}
.d-active {
  background: #0070f5 !important;
  color: white;
  :first-child {
    color: white;
  }
  :nth-child(2) {
    background: #0063e7;
    color: #ffffffa6;
  }
  transition: 0.5s;
}
.d-actives {
  background: #0070f5 !important;
  .s-row1 {
    color: #ffffffd9;
  }
  .s-row2 > span {
    color: #ffffff73;
  }
  .s-row3 > span {
    color: #ffffffa6;
  }
  transition: 0.5s;
}
.cards {
  width: 246px;
  height: 124px;
  background: #f1f1f1;
  border-radius: 4px;
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
  .s-row1 {
    margin-bottom: 16px;
    @include el;
  }
  .s-row2,
  .s-row3 {
    height: 28px;
    line-height: 28px;
    display: flex;
    span {
      flex: 0.6;
      @include el;
    }
    :last-child {
      flex: 0.4;
      @include el;
    }
  }
}
</style>
