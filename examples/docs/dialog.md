<!--
 * @Description: 弹窗
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:30:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-18 17:26:24
 -->

### 公共弹窗
```html
  <b-dialog :visable="false" :content="这是我的弹窗" @dialog="dialog"></b-dialog>
```

<b-dialog :visable="false" :content="这是我的弹窗"></b-dialog>

### Radio Events
| 事件名称 | 说明         | 回调参数   |
| -------- | ------------ | ---------- |
| dialog   | 关闭弹窗操作 | true/false |

### Attributes

| 参数    | 说明           | 类型   | 可选值 | 默认值   |
| ------- | -------------- | ------ | ------ | -------- |
| visable | 是否弹出       | String | -      | false    |
| title   | 标题           | String | -      | 这是标题 |
| content | 弹窗内容       | String | -      | 这是内容 |
| width   | 弹窗宽度       | String | -      | 500px    |
| height  | 弹窗距顶部距离 | String | -      | 15vh     |