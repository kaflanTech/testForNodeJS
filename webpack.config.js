'use strict';

const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const loaders = [
  {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'stage-0'] } },
  {test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate'},
  {test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
  {test: /\.html$/, loader: 'raw'}
];

const plugins = [
  new htmlWebpackPlugin({
    template: './app/index.html',
    inject: 'body',
    hash: true
  }),
  new webpack.HotModuleReplacementPlugin()
]

const config = {
  entry: './app/app.module.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'client'),
    publicPath: '/'
  },
  module: {
    loaders: loaders
  },
  debug: true,
  devTool: 'source-map',
  devServer: {
    hot: true,
    inline: true
  },
  plugins: plugins
}

module.exports = config;
