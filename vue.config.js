/*
 * @Description: 全局配置
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 14:35:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-05-14 18:15:21
 */
const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./packages/index.scss";`,
      },
    },
  },
  // 修改入口
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'));

    // packages和examples目录需要加入编译
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
  /* 读取md,转成vue文件 */
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
      });
  },
};
