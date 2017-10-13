const path = require('path');

module.exports = {
	entry:path.resolve(__dirname,'src/index.js'),
	output:{
		path:"/",
		filename:"bundle.js",
	},
	module:{
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
	}
}