const path = require('path');
const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
const WebpackBaseConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:path.resolve(__dirname,'../src/index.js'),
	output:{
		path:path.resolve(__dirname,'..'),
		filename:"[id].[hash].js",
	},
	devtool:"source-map",
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				loader:"babel-loader",
				exclude:/node_modules/,

				query:{
					presets:["es2015",'react']
				}
			},
			{
				test:/\.css/,
				loader:"style-loader!css-loader",
			},
			{
				test:/\.less/,
				loader:"style-loader!css-loader!less-loader"
			},
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
        }
      }
		]
	},
	devServer:{
		compress: true,
		hot: true,
		inline: true,
		open: true,
		port: 8088,
		proxy: {

		},
		staticOptions: {

		},
    watchOptions: {
      aggregateTimeout : 300,
      poll             : 1000,
    },		
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'../src/index.html'),
			minify: {
				removeComments:true,
				collapseWhitespace:true
			}
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	resolve:{
		alias: {
			"@style":path.resolve(__dirname,'../src/style')
		}
	}
}