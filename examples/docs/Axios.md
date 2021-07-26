<!--
 * @Description:
 * @Version: 1.0
 * @Autor: wuwei3
 * @Date: 2021-04-15 14:31:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-15 14:41:09
-->

## 前端所有项目统一请求封装组件 Axios

### 需要注意的事

如果你不想让所有错误提示由 axios.js 封装组件弹出，可以参考下面这样做。

```js
API.checkPhone({ accountName: this.accountNumber })
  .then((result) => {
    this.type = 2;
    this.checkParams = result;
    this.$msg.success("请求成功");
  })
  .catch((err) => {
    err.msgWin.close(); // 关闭统一提示，编写自定义提示
    this.$msg.error("您的请求有误！");
  });
```

### 封装 Js

```js
import router from "@/router/";
import Storage from "@/utils/storage";
import { Message } from "element-ui";

// 请求分发
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers.post["data-type"] = "json";

const service = axios.create({
  baseURL: "/service", //代理位置替换
});

const storage = new Storage();

let freshNum = 0; // 请求次数

let slp = null; // 睡眠定时

let isFinished = false; // 更新token是否结束

/*
 * 请求
 */
service.interceptors.request.use(
  (config) => {
    let token = storage.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  () => {
    Promise.reject(error.data);
  }
);

/*
 * 响应
 */
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data);
  },
  async (error) => {
    /* 正常错误处理 */
    if (error.response.status !== 401) {
      return handleError(error.response, error);
    }
    /* 这里主要处理登录的401 */
    if (!storage.get("refreshToken")) {
      return (window.location.href = "/console/login");
    }
    /* 请求次数大于1次 */
    if (freshNum >= 1) {
      await sleep(10000);
      /* 10秒后还是没拿到新的token,原因可能是refreshtoken请求一直在挂载 */
      if (!isFinished) {
        sessionStorage.clear();
        localStorage.clear();
        return (window.location.href = "/console/login");
      }

      /* 开始等待新的token */
      freshNum = 0;
      error.config.headers.Authorization = `Bearer ${storage.get("token")}`;
      let res2 = await axios(error.config);

      return Promise.resolve(res2.data);
    }
    freshNum++;
    /* 获取新token */
    try {
      const { data } = await axios.get(
        "/service/auth/refresh?refreshToken=" + storage.get("refreshToken")
      );
      /* 更新token */

      isFinished = true;
      storage.set("token", data.accessToken);
      storage.set("refreshToken", data.refreshToken);
    } catch (err) {
      isFinished = false;
      sessionStorage.clear();
      localStorage.clear();
      clearInterval(slp);
      return (window.location.href = "/console/login");
    }
    error.config.headers.Authorization = `Bearer ${storage.get("token")}`;

    let res = await axios(error.config);

    return Promise.resolve(res.data);
  }
);

/* 休眠操作，中断请求/重新开始 */

function sleep(time) {
  return new Promise(function(resolve) {
    /* 清除睡眠 */
    slp = setInterval(() => {
      if (isFinished) {
        clearInterval(slp);
        resolve();
      }
    }, 500);
    setTimeout(resolve, time);
  });
}
/*
 * 异常处理
 */
function handleError(res) {
  switch (res.status) {
    case 500:
      return toErrorPage(2, res);
    case 504:
      return toErrorPage(3, res);
    case 404:
      return toErrorPage(1, res);
    case 403:
      // 未授权
      if (storage.get("token")) {
        toErrorPage(4);
      }
      return (window.location.href = "/console/login");
    case 400:
      // 参数有误
      return Promise.reject({
        response: res.data,
        msgWin: Message.error(res.data.message),
      });
    case 502:
      // 参数有误
      return Message.error(
        "温馨提示：系统可能正在维护，请稍后重试！ 如果您多次看到此消息，请联系系统管理员。"
      );
    default:
      break;
  }
  function toErrorPage(code, res) {
    router.push({
      name: "error",
      params: {
        id: code,
      },
    });
    return Promise.reject({
      response: res.data,
      msgWin: Message.error(res.data.message),
    });
  }
}

export default service;
```
