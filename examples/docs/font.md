<!--
 * @Description: 字体
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:29:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-21 18:45:55
 -->

# 字体

```html
  <b-font :size="'f-max-large'" :weight="true" :color="'#ccc'">字体</b-font> 
```

<div class="demo-block k-height">
  <b-font :size="'f-max-large'" :weight="true" :color="'#ccc'">最大字体</b-font>
  <b-font :size="'f-large'" >大字体</b-font>
  <b-font :size="'f-medium'" >正常字体</b-font>
  <b-font :size="'f-small'" >小字体</b-font>
</div>


### Attributes

| 参数   | 说明 | 类型   | 可选值                               | 默认值 |
| ------ | ---- | ------ | ------------------------------------ | ------ |
| size   | 尺寸 | String | f-max-large,f-large,f-medium,f-small | medium |
| weight | 粗细 | Boolen | true,false                           | false  |
| color  | 颜色 | String | -                                    | #444   |