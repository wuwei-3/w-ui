<!--
 * @Description: 按钮
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 15:42:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-12 09:43:24
 -->

## Button 按钮

常用的操作按钮。

## 基础按钮

基础的按钮用法。

:::demo

```html
<div class="b-btn">
  <b-button>默认按钮</b-button>
  <b-button type="info">信息按钮</b-button>
  <b-button type="warning">警告按钮</b-button>
  <b-button type="error">错误按钮</b-button>
</div>
```

:::

## 禁用按钮

按钮不可用状态。

:::demo

```html
<div class="b-btn">
  <b-button disabled>默认按钮</b-button>
</div>
```

:::

## 按钮图标

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo

```html
<div class="b-btn">
  <b-button><i class="el-icon-close b-left"></i>图标按钮</b-button>
</div>
```

:::

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo

```html
<div class="b-btn">
  <b-button size="medium">默认按钮</b-button>
  <b-button size="small">中型按钮</b-button>
  <b-button size="mini">小型按钮</b-button>
</div>
```

:::

## 自定义尺寸

用于适应不同业务场景下按钮尺寸。

:::demo

```html
<div class="b-btn">
  <b-button width="200" height="48">自定义按钮</b-button>
</div>
```

:::

### Radio Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| click    | 支持原生点击事件 | e        |

### Attributes

| 参数         | 说明     | 类型   | 可选值                  | 默认值  |
| ------------ | -------- | ------ | ----------------------- | ------- |
| weight       | 宽度     | Number | -                       | -       |
| height       | 高度     | Number | -                       | 40      |
| color        | 字体颜色 | String | -                       | #fff    |
| bgColor      | 背景色   | String | -                       | #005bfa |
| icon(看示例) | 图标     | String | 左：b-left，右：b-right | —       |
