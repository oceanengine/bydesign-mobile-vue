/**
 * webpack 基础配置
 */
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.md']
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          rootMode: 'upward'
        }
      }
    }, {
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          },
          cacheBusting: true,
          transformToRequire: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href'
          }
        }
      }]
    }, {
      test: /\.md$/,
      use: [
        '@byted/bydesign-markdown-loader'
      ]
    },
    {
      test: /\.(ttf|svg)$/,
      loader: 'url-loader',
    },]
  },
  plugins: [new VueLoaderPlugin()]
}
