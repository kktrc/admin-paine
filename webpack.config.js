var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var DIST_PATH = path.resolve(ROOT_PATH,'dist');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

	// entry: {
	// 	'./dist/build': ['./app/entry.js','webpack/hot/only-dev-server', 'webpack-dev-server/client?http://localhost:3000']
	// },

	entry: './app/entry.js',

	// output: {
	// 	path: './',
	// 	publicPath: './',
	// 	filename: '[name].js'
	// },

	output: {path: __dirname,filename: 'bundle.js'},

	resolve: {
		extensions: ['','.js','.jsx','.css']
	},

	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style','css']
			},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]",
			},
			{
	      test: /\.less$/,
	      loader: 'style!css!less'
	    }
			]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
			new webpack.optimize.UglifyJsPlugin({
				compressor: {
					warnings: false
				}
			}),
			new OpenBrowserPlugin({url: 'http://localhost:3000'})
		]
	}
