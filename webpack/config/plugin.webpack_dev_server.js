const path = require('path');

module.exports = {
	entry:path.resolve(__dirname,'../plugins/webpack-dev-server/src/main.js'),

	devtool:"inline-source-map",

	devServer:{
		contentBase:path.resolve(__dirname,'../plugins/webpack-dev-server/src'),
		compress:false,
		port:9000
	},

	output:{
		filename:"[name].[hash].[id].js",
		path:path.resolve(__dirname,'../plugins/webpack-dev-server/')
	}
}