/**
 * 开发环境webpack入口文件
 */
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./webpack.base')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(config, {
  mode: 'development',
  entry: {
    'index': resolve('docs/index'),
  },
  output: {
    path: resolve('lib'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  devServer: {
    host: 'localhost',
    port: 9081,
    open: true
  },
  stats: {
    modules: false,
    children: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'docs/template.html',
      filename: 'index.html',
      inject: false
    })
  ]
})
