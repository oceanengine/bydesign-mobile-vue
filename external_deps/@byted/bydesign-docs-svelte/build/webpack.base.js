/**
 * webpack 基础配置
 */
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.mjs', '.js', '.less', '.css'],
    mainFields: ['svelte', 'browser', 'module', 'main']
  },
  module: {
    rules: [{
      test: /\.(css|less)$/,
      sideEffects: true,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }, {
      test: /\.(html|svelte)$/,
      exclude: [
        /node_modules/,
      ],
      use: 'svelte-loader'
    }]
  }
}
