<!--
 * @Description: 弹窗
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:30:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 17:03:56
 -->

## 公共弹窗

Dialog 弹出一个对话框，常用三种弹窗，对一些定制化弹窗直接手动添加即可。

:::demo

```html
<template>
  <div class="b-dialog">
    <div class="b-fh m-bottom16">
      <b-button class="m-right16" @click="visable = true" type="info"
        >常用弹窗</b-button
      >
      <b-button class="m-right16" @click="visable2 = true" type="info"
        >简约弹窗</b-button
      >
      <b-button class="m-right16" @click="visable3 = true" type="info"
        >轻弹窗</b-button
      >
    </div>
    <b-dialog
      :visable="visable"
      :footer="false"
      width="464px"
      @dialog="onDialog"
    >
      <div class="t-dialog">
        <div class="g-title">文字标题</div>
        <div class="g-value">这里是针对当前场景下操作详细的描述</div>
      </div>
    </b-dialog>
    <b-dialog
      :visable="visable2"
      :footer="false"
      width="464"
      dClass="t-head"
      top="16vh"
      @dialog="visable2 = false"
    >
      <div class="t-dialog">
        <div class="g-title">文字标题</div>
        <div class="g-value">这里是针对当前场景下操作详细的描述</div>
      </div>
    </b-dialog>
    <b-dialog
      :visable="visable3"
      :footer="false"
      width="464"
      dClass="t-head-footer"
      top="16vh"
      @dialog="visable3 = false"
    >
      <div class="t-dialog">
        <i class="g-icon el-icon-close" @click="visable3 = false"></i>
        <div class="g-title">文字标题</div>
        <div class="g-value">
          这里是针对当前场景下操作详细的描述，这里是针对当前场景下
          操作详细的描述这里是针对当前场景下操作详细的描述，这里是
          针对当前场景下操作详细的描述。
        </div>
      </div>
    </b-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visable: false,
        visable2: false,
        visable3: false,
      };
    },
    methods: {
      onDialog(val) {
        this.visable = false;
        this.visable2 = false;
        this.visable3 = false;
      },
    },
  };
</script>
<style lang="scss">
  // style
  .b-dialog {
    @include wh;
    box-sizing: border-box;
    .t-dialog {
      width: 100%;
      padding: 32px;
      box-sizing: border-box;
      position: relative;
      .g-title {
        margin-bottom: 16px;
        font-size: 16px;
        color: #000000e6;
      }
      .g-value {
        color: #00000073;
      }
    }
    .t-head {
      .el-dialog__header {
        display: none;
      }
    }
    .t-head-footer {
      .el-dialog__header {
        display: none;
      }
      .el-dialog__footer {
        display: none;
      }
      .g-icon {
        position: absolute;
        right: 16px;
        top: 16px;
        font-size: 16px;
      }
    }
  }
</style>
```

:::

### Radio Events

| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| dialog   | 关闭弹窗操作 | true/false |

### Attributes

| 参数    | 说明           | 类型    | 可选值 | 默认值   |
| ------- | -------------- | ------- | ------ | -------- |
| visable | 是否弹出       | String  | -      | false    |
| title   | 标题           | String  | -      | 这是标题 |
| width   | 弹窗宽度       | String  | -      | 500px    |
| top     | 弹窗距顶部距离 | String  | -      | 15vh     |
| dClass  | 自定义弹窗类名 | String  | -      | -        |
| footer  | 是否去除按钮栏 | Boolean | -      | -        |
