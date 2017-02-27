const path = require('path');
module.exports = {
	entry:"./loader_css/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'loader_css')
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