'use strict'

var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    library: 'MemoizeFunctions',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        dead_code: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
}
