const path = require('path');

module.exports = {
	entry:path.resolve(__dirname,"../loaders/image/index.js"),
	output:{
		path:path.resolve(__dirname,'../loaders/image/dist'),
		filename:"dist.js",
		publicPath:"dist/"
	},
	module:
	{
		rules:[
			{
				test:/\.css$/,
				loaders:"style-loader!css-loader"
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