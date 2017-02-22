const path = require('path');
module.exports = {
	entry:"./css_loader/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'css_loader')
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