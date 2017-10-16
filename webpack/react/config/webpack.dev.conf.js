const path = require('path');
const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const WebpackBaseConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'../src/idnex.jsx'),
	output:{
		path:__dirname,
		publicPath:"/",
		filename:"[id].[chunkHash].js",
	},
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				loader:"babel-loader",
				query:{
					presets:["es2015",'react']
				}
			},
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