const path = require('path');

module.exports = {
	entry:"./font_loader/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'font_loader/dist')
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