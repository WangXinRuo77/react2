const path = require('path');
module.exports = {
	context:path.join(__dirname),
	entry:"./src/js/index.js",
	module: {
		loaders: [
			{
				test:/\.js?$/,
				exclude:/node_modules/,
				loader:"babel-loader",
				query: {
					presets: ['react','es2015']
				}
			}
		]
	},
	devServer: {
		contentBase:path.join(__dirname),
		compress:true,
		port:8088,
		noInfo:true
	},
	output: {
		path:__dirname,
		filename:"./src/bundle.js"
	},
}
