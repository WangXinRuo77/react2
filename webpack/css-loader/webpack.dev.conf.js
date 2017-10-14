const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry:path.join(__dirname,'src/index.js'),
	output:{
		filename:"css.js",
		path:__dirname
	},
	devtool:"source-map",
	module:{
		loaders:[
			{
				test:/\.css/,
				loader:"css-loader!style-loader"
			},
			{
				test:/\.less/,
				loader:"css-loader!style-loader!less-loader"
			},
			{
				test:/\.sass/,
				loader:"css-loader!sass-loader!style-loader"
			},
			{
				test:/\.scss/,
				loader:"css-loader!style-loader!sass-loader"
			},
			{
				test:/\.styl/,
				loader:"css-loader!style-loader!styl-loader"
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