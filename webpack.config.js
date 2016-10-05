'use strict';

var path = require('path');

module.exports = {
  entry: {
    saga: './src/saga/index.js',
    logic: './src/logic/index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  resolve: {
    alias: {
      common: path.join(__dirname, 'src', 'common')
    }
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].bundle.js',
    publicPath: '/in-memory'
  },
  devtool: 'inline-source-map'
};
