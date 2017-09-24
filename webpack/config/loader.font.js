const path = require('path');

module.exports = {
	entry:path.resolve(__dirname,"../loaders/font/index.js"),
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'../loaders/font/dist')
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