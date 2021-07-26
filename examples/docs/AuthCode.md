<!--
 * @Description:
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-04-15 14:48:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 14:52:41
-->

## 处理后端返回流图片（目前在验证码中有使用）

### 注意该方式不适于大于 500k 图片流

```js
    /**
     * @description: 获取验证码
     * @param {*} result 图片流地址
     * @return {*}
     */
    autoCodeToImg(result){
      return "data:image/png;base64," +
        btoa(
          new Uint8Array(result.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )
      }
```
