/*
 * @Description: 全局配置
 * @Version: 2.0
 * @Autor: wuwei3
 * @Date: 2020-05-07 14:35:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-13 09:24:09
 */
const path = require("path");
const md = require("markdown-it")(); // 引入markdown-it
const slugify = require("transliteration").slugify; // 引入transliteration中的slugify方法

module.exports = {
  // 访问路径
  publicPath: "./",
  // 打包文件目录
  outputDir: "dist",

  parallel: false,

  // 静态资源目录
  assetsDir: "static",
  // 哈希缓存
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查 开发环境报错，不影响线上环境
  lintOnSave: process.env.NODE_ENV === "production",
  // 是否使用包含运行时编译器的Vue核心的构建
  runtimeCompiler: false,
  // 默认情况下 babel-loader 忽略其中的所有文件 node_modules
  transpileDependencies: [],
  // 生产环境 sourceMap
  productionSourceMap: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./examples/styles/index.scss";`,
      },
    },
  },
  // 修改入口
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  // vue默认@指向src目录，这里要修正为examples，另外新增一个~指向packages
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve("examples"))
      .set("~", path.resolve("packages"));

    // packages和examples目录需要加入编译
    config.module
      .rule("js")
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      });
  },
  /* 读取md,转成vue文件 */
  chainWebpack: (config) => {
    config.module
      .rule("md")
      .test(/\.md/)
      .use("vue-loader")
      .loader("vue-loader")
      .end()
      .use("vue-markdown-loader")
      .loader("vue-markdown-loader/lib/markdown-compiler")
      .options({
        raw: true,
        preventExtract: true, //这个加载器将自动从html令牌内容中提取脚本和样式标签
        // 定义处理规则
        preprocess: (MarkdownIt, source) => {
          // 对于markdown中的table,
          MarkdownIt.renderer.rules.table_open = function() {
            return '<table class="doctable">';
          };
          // 对于代码块去除v - pre, 添加高亮样式;
          const defaultRender = md.renderer.rules.fence;
          MarkdownIt.renderer.rules.fence = (
            tokens,
            idx,
            options,
            env,
            self
          ) => {
            const token = tokens[idx];
            // 判断该 fence 是否在 :::demo 内
            const prevToken = tokens[idx - 1];
            const isInDemoContainer =
              prevToken &&
              prevToken.nesting === 1 &&
              prevToken.info.trim().match(/^demo\s*(.*)$/);
            if (token.info === "html" && isInDemoContainer) {
              return `<template slot="highlight"><pre v-pre><code class="html">${md.utils.escapeHtml(
                token.content
              )}</code></pre></template>`;
            }
            return defaultRender(tokens, idx, options, env, self);
          };
          return source;
        },
        use: [
          // 标题锚点
          [
            require("markdown-it-anchor"),
            {
              level: 2, // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
              slugify: slugify, // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
              permalink: true, // 开启标题锚点功能
              permalinkBefore: true, // 在标题前创建锚点
            },
          ],
          //匹配:::后面的内容 nesting == 1,说明:::demo 后面有内容
          //m为数组,m[1]表示 ****
          [
            require("markdown-it-container"),
            "demo",
            {
              validate: function(params) {
                return params.trim().match(/^demo\s*(.*)$/);
              },

              render: function(tokens, idx) {
                const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                if (tokens[idx].nesting === 1) {
                  //
                  const description = m && m.length > 1 ? m[1] : ""; // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
                  const content =
                    tokens[idx + 1].type === "fence"
                      ? tokens[idx + 1].content
                      : "";

                  return `<demo-block>
                  <div slot="source">${content}</div>
                  ${description ? `<div>${md.render(description)}</div>` : ""}
                  `;
                }
                return "</demo-block>";
              },
            },
          ],
          [require("markdown-it-container"), "tip"],
          [require("markdown-it-container"), "warning"],
        ],
      });
  },
};
