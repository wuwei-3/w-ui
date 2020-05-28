<!--
 * @Description: 输入框
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-18 13:48:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-21 18:49:30
--> 
### 输入框
```html
  <b-input></b-input>
```
<b-input></b-input>

### Radio Events
| 事件名称    | 说明             | 回调参数 |
| ----------- | ---------------- | -------- |
| changeInput | 页面输入框值更改 | 输入框值 |


### Attributes

| 参数        | 说明           | 类型    | 可选值 | 默认值     |
| ----------- | -------------- | ------- | ------ | ---------- |
| placeholder | 输入框占位     | String  | -      | 请输入内容 |
| width       | 宽度           | String  | -      | -          |
| height      | 高度           | String  | -      | -          |
| input       | 输入框字段     | String  | -      | -          |
| maxlength   | 最大输输入长度 | Number  | -      | 20         |
| disabled    | 是否禁用       | Boolean | -      | false      |
| debounce    | 输入框延迟时间 | Number  | -      | 1000       |