var webpack = require('webpack');
var extractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    './dist/build': './app/entry.js',
  },
  output: {
    path: './',
    publicPath: './',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
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
      compressor: {
        warnings: false
      }
    }),
    // new CompressionPlugin({
    //         asset: "[path].gz[query]",
    //         algorithm: "gzip",
    //         test: /\.js$|\.html$/,
    //         threshold: 10240,
    //         minRatio: 0.8
    //     })
    // new extractTextPlugin("[name].css"),
    // 提供公共代码
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
  ],
}
;
