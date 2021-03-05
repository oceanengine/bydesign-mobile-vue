
/**
 * 开发环境配置 
 */
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./webpack.base.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(config, {
  devtool: false,
  entry: resolve('docs/index'),
  devServer: {
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    host: 'localhost',
    port: 8067
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'docs/template.html',
      filename: 'index.html'
    })
  ]
})
