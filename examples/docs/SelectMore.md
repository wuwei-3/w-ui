<!--
 * @Description: 滚动加载组件
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-04-06 14:32:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 11:35:10
-->

## Select 滚动加载更多

当下拉框数据过多，通过指定滚动加载获取更多下拉内容（如使用有问题，请自行查看源码）

:::demo

```html
<template>
  <div class="b-select-more">
    <b-select
      @remoteMethod="remoteMethod"
      :options="options"
      placeholder="请选择学校"
    ></b-select>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options: [],
      };
    },
    mounted() {
      this.testOpthions({ page: 0 });
    },
    methods: {
      testOpthions(val) {
        let arr = [];
        for (let i = 0; i < 10 * (val.page + 1); i++) {
          arr.push({ value: i, label: "学校" + i });
        }
        this.options = arr;
      },
      /**
       * @description: 模糊搜索
       * @param {*}
       * @return {*}
       */

      remoteMethod(val) {
        if (val.value) {
          return this.testOpthions({ page: -1 });
        }
        this.testOpthions(val);
      },
    },
  };
</script>
```

:::

### Radio Events

| 事件名称     | 说明                                                            | 回调参数               |
| ------------ | --------------------------------------------------------------- | ---------------------- |
| remoteMethod | 滚动条滚动底部加载，page 为滚动到第几页，value 为模糊搜索传入值 | function({page,value}) |

### Attributes

| 参数         | 说明                                            | 类型          | 可选值 | 默认值     |
| ------------ | ----------------------------------------------- | ------------- | ------ | ---------- |
| placeholder  | 输入框占位                                      | String        | -      | 请输入密码 |
| defaultValue | 默认选中值                                      | String,Number | -      | -          |
| options      | 控制下拉框数据值参数类型([{value:'',label:''}]) | Array         | -      | []         |
