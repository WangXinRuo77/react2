const path = require('path');
const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const WebpackBaseConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'../src/index.js'),
	output:{
		path:path.resolve(__dirname,'..'),
		filename:"[id].[hash].js",
	},
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				loader:"babel-loader",
				exclude:/node_modules/,

				query:{
					presets:["es2015",'react']
				}
			},
			{
				test:/\.css/,
				loader:"style-loader!css-loader",
			},
			{
				test:/\.less/,
				loader:"style-loader!css-loader!less-loader"
			}
		]
	},
	devServer:{
		compress: true,
		hot: true,
		inline: true,
		open: true,
		port: 8088,
		proxy: {

		},
		staticOptions: {

		}
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'../src/index.html'),
			minify: {
				removeComments:true,
				collapseWhitespace:true
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}