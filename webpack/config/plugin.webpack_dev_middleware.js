const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		"app": path.resolve(__dirname,'../plugins/webpack-dev-middleware/src/index.js')
	},
	devtool:"source-map",
	output:{
		filename:"[id].[chunkHash].js",
		path:path.resolve(__dirname,'../plugins/webpack-dev-middleware/src'),
		publicPath:'/'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				loader:"style-loader!css-loader"
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'../plugins/webpack-dev-middleware/src/index.html')
		})
	]
}