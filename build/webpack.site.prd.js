const del = require('del');
const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.site.dev');

const distPath = path.join(__dirname, '..', 'docs/dist');
del.sync([path.join(distPath, '**')]);

module.exports = merge(config, {
  mode: 'production',
  output: {
    path: distPath,
    publicPath: 'https://sf1-scmcdn-tos.pstatp.com/goofy/byted_ui_m/',
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/async_[name].[chunkhash:8].js',
  },
  performance: {
    maxEntrypointSize: 1024000,
  },
});
