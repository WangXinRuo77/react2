const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry:path.join(__dirname,'src/index.js'),
	output:{
		filename:"css.js",
		path:__dirname
	}, 
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:"style-loader!css-loader",
			},
			{
				test:/\.less/,
				loader:"style-loader!css-loader!less-loader"
			},
			{
				test:/\.sass/,
				loader:"style-loader!css-loader!sass-loader"
			},
			{
				test:/\.scss/,
				loader:"style-loader!sass-loader!css-loader"
			},
			{
				test:/\.styl/,
				loader:"style-loader!css-loader!styl-loader"
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.join(__dirname,'src/index.html'),
			minify:{
				removeComments:true,
				collapseWhitespace:true,
			}
		})
	]
}