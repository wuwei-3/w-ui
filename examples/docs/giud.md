<!--
 * @Description: 介绍
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 17:27:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-08 15:32:03
 -->

## BIIMS-UI

这里是 Element UI + Vue 实现，开发和服务于企业级后台产品，用于脑科学组-国家项目条线--前端页面快速开发。

## 特性

- 提炼自企业级中后台产品的交互语言和视觉风格。
- 开箱即用的高质量 Vue 组件。
- 提供简单友好的传参和 API。

## 支持环境

- 现代浏览器和 IE9 及以上。
- 支持服务端渲染。

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE11, Edge                                                                                                                                                                                                      | last 2 versions                                                                                                                                                                                                   | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                                     | last 2 versions                                                                                                                                                                                           |

## 版本

你可以订阅 [脑科学仓库](http://npm.brain.com/)，获得稳定版发布的通知。

## 安装

### 使用 npm 或 yarn 安装

我们推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

<span class="bi-color-error">切换 npm 源（这里是必须的）</span>，必须引用脑科学自定义 Element ui 主题库，前端 CLI 脚手架已提供。

```js
$ npm set registry http://npm.brain.com 或 npm config set registry http://npm.brain.com // 切换到内部源地址

$ npm i nrm -g // 已安装请忽略

$ nrm add brain http://npm.brain.com && nrm ls // 添加源并查看当前列表

$ nrm use brain //切换源

$ npm login // 登录源 输入账号密码邮箱 wuwei3 + 密码 + 邮箱

```

### 安装依赖

必须使用 npm 的方式安装，它能更好地和打包工具配合使用。

```shell
npm i biims-ui --save
```

### [bp-vue](https://git.iflytek.com/HY_bp/bp-vue) 新手参考

前端项目统一开发模板，内置 biims-ui，element-ui 自定义主题，公共样式库等，快速搭建统一页面，所有前端系统必须使用该模板<span class="bi-color-error">（这里非常重要）</span>。

```js
public; // 唯一静态页面，用于挂载vue元素
src;
>：api; // 页面接口
>：assets; // 静态资源
>：constants; // 普通常量
>：enum; // 枚举常量
>：icon; // 字体
>：lang; // 国际化
>：router; // 路由
>：store; // vuex状态管理
>：styles; // 统一样式
>：utils; // 工具集
>：views; // 页面
App.vue;
main.js; // 项目配置
```

### 使用实例

```js
import BIUI from "biims-ui";

import BIUI from "biims-ui";
import "biims-ui/build/bi-ui.css";

Vue.use(BIUI);
```

### 如何贡献

如果你希望参与贡献，欢迎 [Pull Request](https://git.iflytek.com/HY_bp/biims-ui)，或给我们 <span class="bi-color-main">wuwei3@iflytek.com</span>。

### 特别感谢

[Element UI](https://element.eleme.cn/#/zh-CN)，[Vue](https://cn.vuejs.org/)，[webpack](https://webpack.js.org/)
