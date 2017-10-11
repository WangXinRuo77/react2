const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:path.resolve(__dirname,'src/index.js'),
	output:{
		filename:"[id].[chunkHash].js",
		path:path.resolve(__dirname,'dist')
	},
	devtool:"inline-source-map",
	module:{
		loaders:[
			{
				test:/\.js%/,
				loader:"babel-loader",
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			title:"output html webpack plugin",
			template:path.resolve(__dirname,'src/index.html')
		})
	]
}