const path = require('path');
module.exports = {
	entry:path.resolve(__dirname,'../loaders/css/index.js'),
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'../loaders/css/dist')
	},
	module: {
		rules: [
			{
				test:/\.css$/,
				use:[
					"style-loader",
					"css-loader"
				]
			}
		]
	}
}