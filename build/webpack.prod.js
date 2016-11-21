var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    entry: './app/entry.js'
  },
  output: {
    path: './dist',
    publicPath: './',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.svg|woff|eot|ttf$/,
        loader: require.resolve('file-loader') + '?name=[path][name].[ext]'
      },
      {
        test:/\.css$/,
        loaders: ['style','css']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css']
    }
};
