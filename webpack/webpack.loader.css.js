const path = require('path');
module.exports = {
	entry:"./loader/loader_css/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'loader/loader_css')
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