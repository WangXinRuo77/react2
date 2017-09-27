const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry:{
		"app":path.resolve(__dirname,'../plugins/webpack-dev-server/src/main.js')		
	},

	// devtool:"inline-source-map",

	devServer:{
		contentBase:path.resolve(__dirname,'../plugins/webpack-dev-server/src'),
		compress:false,
		port:9000,
		noInfo:true, 
		inline:true,
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:path.resolve(__dirname,'../plugins/webpack-dev-server/src/index.html'),
			template:path.resolve(__dirname,'../plugins/webpack-dev-server/src/index.html'),
			jnject:false,
		})
	],
	output:{
		filename:"[id].[chunkHash].js",
		path:path.resolve(__dirname,'../plugins/webpack-dev-server/src')
	},
	resolve:{
		extensions:['.js','.vue','.json']
	},
	module:{
		rules:[
			{
				test:/\.vue$/g,
				loader:"vue-loader"
			},
			{
				test:/\.js$/g,
				loader:"babel-loader",
			},
			{
				test:/\.css$/g,
				loader:"style-loader!css-loader"
			}
		]
	}
}