const path = require('path');

module.exports = {
	entry:"./image_loader/index.js",
	output:{
		path:path.resolve(__dirname,'image_loader'),
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