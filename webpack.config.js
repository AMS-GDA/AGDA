var path = require('path'); // eslint-disable-line
var webpack = require('webpack'); // eslint-disable-line
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = [
  {
    devtool: 'source-map',
    entry: './app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'server.bundle.js'
    },
    target: 'web',
    module: {
      loaders: [
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    node: {
      console: true,
      'fs': 'empty',
      'net': 'empty'
    }
  },
  {
    devtool: 'source-map',
    entry: './index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: 'style-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          exclude: /node_modules/,
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist'])
    ]
  }
];
