const path = require('path');

module.exports = {
	entry:"./loader_font/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'loader_font/dist')
	},
	module:{
		rules:[
			{
				test:/\.css/,
				use:[
					{
						loader:'style-loader',
					},
					{
						loader:'css-loader'
					}
				]
			},
			{
				test:/\.(woff|woff2|eot|ttf|otf|svg)$/,
				use:[
					{
						loader:'file-loader'
					}
				]
			},
		]
	}
}