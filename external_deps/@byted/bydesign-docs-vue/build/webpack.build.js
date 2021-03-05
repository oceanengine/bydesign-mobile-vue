const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.base')
const TerserPlugin = require('terser-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(config, {
  mode: 'production',
  entry: {
    index: resolve('src/index')
  },
  output: {
    path: path.join(__dirname, '../lib'),
    library: 'bui',
    libraryTarget: 'umd',
    filename: '[name].js',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  performance: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          safari10: true
        }
      })
    ],
  }
})
