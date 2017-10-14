const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'src/index.js'),
	output:{
		path:path.resolve(__dirname,'dist'),
		publicPath:"dist",
		filename:"[id].[chunkHash].js",
	},
	module:{
		loaders:[
			{
				test:/\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader:"file-loader",
				options:{
					limit:10000,
				}
			},
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
         }
      },			
			{
				test:/\.css/,
				loader:"style-loader!css-loader"
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'src/index.html'),
			minify:{
				removeComments:true,
				collapseWhitespace:true
			}
		})
	]
}