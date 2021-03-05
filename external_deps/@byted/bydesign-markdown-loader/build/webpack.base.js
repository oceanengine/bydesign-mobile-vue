/**
 * webpack 配置文件
 */
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts?$/,
      use: {
        loader: 'ts-loader'
      }
    }, {
      test: /\.md$/,
      use: {
        loader: resolve('lib/index'),
      }
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
}
