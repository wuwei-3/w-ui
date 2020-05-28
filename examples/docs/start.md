<!--
 * @Description: 快速开始
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-08 09:27:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-14 19:15:15
 -->

# 快速上手

### 切换内部源并推送至远程仓库

  ```js
    npm set registry http://npm.brain.com  // 切换临时源
    
    npm config set registry http://npm.brain.com  // 切换全局源

    npm i nrm -g // 源管理包

    nrm add brain http://npm.brain.com && nrm ls // 添加源并查看当前列表 nrm del <源名> 删除 ，nrm test <源名> 测试

    nrm use brain //切换源

    npm login // 登录源 输入账号密码邮箱 wuwei3 + 密码 + 邮箱

    npm publish  // 推送远程
  ```

### 安装依赖

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
 npm i bi-ui --save
```

### 如何使用

```js
import BIUI from 'bi-ui'; // main.js 中引入组件库

Vue.use(BIUI);
```
