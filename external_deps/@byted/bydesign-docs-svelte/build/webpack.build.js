const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(config, {
  mode: 'production',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'docs',
    libraryTarget: 'umd',
    filename: '[name].js',
    umdNamedDefine: true
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          safari10: true
        }
      })
    ],
  },
  performance: false
})
