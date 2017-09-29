const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:{
		"app": path.resolve(__dirname,'../plugins/webpack-dev-middleware/src/index.js')
	},
	devtool:"source-map",
	output:{
		filename:"[id].[chunk].js",
		path:path.resolve(__dirname,'../plugins/webpack-dev-middleware')
	},

}