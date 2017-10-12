const path = require('path');

module.exports = {
	context:path.resolve(__dirname),
	entry:'src/index.js',
	module: {
		loaders:[
			{
				test:/\.js/,
				exclude:/node_modules/,
				loader:"babel-loader",
				query:{
					presets:['react','es2015']
				}
			}
		]
	},
	output: {
		filename:"bundle.js",
		path:__dirname
	}
}