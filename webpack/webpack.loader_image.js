const path = require('path');

module.exports = {
	entry:"./loader_image/index.js",
	output:{
		path:path.resolve(__dirname,'loader_image'),
		filename:"dist.js"
	},
	module:
	{
		rules:[
			{
				test:/\.sass/,
				use:[
					{
						loader:'style-loader'
					},
					{
						loader:'css-loader'
					},
					{
						loader:'sass-loader'
					}
				]
			},
			{
				test:/\.(jpg|png|svg|gif)/,
				use:[
					{
						loader:'file-loader'
					}
				]
			}
		]
	}
}