<!--
 * @Description:
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-04-15 14:41:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 14:46:02
-->

## 统一处理文件下载

### 下载方式 1 （不需要 token）

```js
let url = "/service/biims-console/api/children/excel";

window.location.href = url;
```

### 下载方式 2 （需要 token）

参考下面例子

```js

  /**
     * @description: get 参数拼接
     * @param {type} obj 请求参数
     * @return:
     */
    encodeSearchParams(obj) {
      var params = [];

      Object.keys(obj).forEach((key) => {
        let value = obj[key];

        if (typeof value === "undefined") {
          value = "";
        }
        params.push([key, encodeURIComponent(value)].join("="));
      });
      return params.join("&");
    },

    /**
     * @description: 下载接口
     * @param {type}
     * @return:
     */
    downLoad() {
      let par = {
        ...this.params,
        size: this.size,
        page: this.page,
        subjectId: this.subjectId,
      };

      let time = this.$moment(new Date())
        .add(0, "year")
        .format("YYYYMMDDHHmmss");

      let url = this.encodeSearchParams(par);

      axios
        .get("service/biimsConsole/api/subject/download?" + url, {
          responseType: "arraybuffer", // 这个是不必须要有的
          xsrfHeaderName: "Authorization",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          const blob = new Blob([res.data], {
            type: "application/vnd.ms-excel", // 如果下载的格式是多种格式，可以不定义
          });
          // 点击下载
          const objectUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");

          link.download = `${time + ".xlsx"}`;
          document.body.appendChild(link);
          link.href = objectUrl;
          link.click();
          window.URL.revokeObjectURL(objectUrl); // 下载完需要释放资源
        });
    },

```
