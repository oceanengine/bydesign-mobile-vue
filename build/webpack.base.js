/**
 * webpack 基础配置
 */
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const LessVarMark = require('../external_deps/@byted/less-var-mark');
const { lessVars, lessMap } = require('./utils/lessConfig');

let vars = {};

// css变量生成在线演示文档
const lessPlugins = [];
if (process.env.THEME === true || process.env.THEME === 'true') {
  vars = lessVars;
  lessPlugins.push(new LessVarMark(lessVars, lessMap));
}

// 抖音主题线上环境模拟
if (process.env.THEME === 'aweme') {
  vars = require('../src/theme/aweme.json');
}

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.vue', '.css', 'less'],
    modules: ['external_deps', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // enable sub-packages to find babel config
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
              cssSourceMap: true,
              cacheBusting: true,
              transformToRequire: {
                video: ['src', 'poster'],
                source: 'src',
                img: 'src',
                image: 'xlink:href',
              },
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        sideEffects: true,
        include: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')],
              javascriptEnabled: true,
              noIeCompat: true,
              modifyVars: vars,
              plugins: lessPlugins,
            },
          },
        ],
      },
      {
        test: /\.(css|less)$/,
        sideEffects: true,
        exclude: /(node_modules)/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('../external_deps/@byted/postcss-var')],
            },
          },
          {
            loader: 'less-loader',
            options: {
              paths: [path.resolve(__dirname, 'node_modules')],
              javascriptEnabled: true,
              noIeCompat: true,
              modifyVars: vars,
              plugins: lessPlugins,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: ['@byted/bydesign-markdown-loader'],
      },
      {
        test: /.mdx$/,
        use: [
          'babel-loader',
          '@mdx-js/vue-loader',
          {
            loader: '@bydesign-ui/mdx-loader',
            options: {
              publicPath: path.resolve('src'),
              fileType: '.vue',
            },
          },
        ],
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
