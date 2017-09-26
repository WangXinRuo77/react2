const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:path.resolve(__dirname,'../plugins/html-webpack-plugin/src/index.js'),
	output:{
		filename:"[name].bundle.js",
		path:path.resolve(__dirname,'../plugins/html-webpack-plugin/')
	},
	module:{
		rules:[
			{
				test:/\.js$/g,
				loader:"babel-loader"
			},
			{
				test:/\.css$/g,
				loader:"style-loader!css-loader"
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:"output html webpack plugin"
		})
	]
}