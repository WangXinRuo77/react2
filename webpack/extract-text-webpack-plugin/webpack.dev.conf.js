const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'src/index.js'),
	output:{
		filename:"[id].[chunkHash].js",
		path:path.resolve(__dirname,'dist'),
		
	},
	module:{
		rules:[
			{
				test:/\.less/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:["css-loader","less-loader"]
				})
			},
			{
				test:/\.js/,
				loader:"babel-loader",
				query:{
					presets:['es2015']
				}
			}
		]
	},
	plugins:[
		new ExtractTextWebpackPlugin('output.css'),
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'src/index.html'),
			minify:{
				removeComments:true,
				collapseWhitespace:true,
			}
		})
	]
}