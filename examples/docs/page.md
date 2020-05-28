<!--
 * @Description: 公共分页
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 20:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-15 16:49:13
 -->

# 公共分页

```html
  <b-page :size="15" :page="1" :total="100" @size="pageSize" @page="pageNum"></b-page>
```

  <b-page :size="15" :page="1" :total="100"></b-page>

### Radio Events
| 事件名称 | 说明                   | 回调参数 |
| -------- | ---------------------- | -------- |
| size     | 切换分页条数触发的事件 | 每页条数 |
| page     | 切换分页数触发的事件   | 当前页   |

### Attributes

| 参数  | 说明     | 类型   | 可选值          | 默认值 |
| ----- | -------- | ------ | --------------- | ------ |
| page  | 当前页   | Number | -               | 1      |
| size  | 每页条数 | Number | 15，30，50，100 | 15     |
| total | 总数     | Number | -               | 0      |