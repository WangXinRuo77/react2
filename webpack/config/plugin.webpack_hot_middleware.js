const path = require("path");
const webpack = require("webpack");
const express = require("express");
const devPath = path.resolve(__dirname,'../plugins/webpack-hot-middleware')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const config = {
	entry:path.join(devPath,'/src/index.js'),
	output:{
		filename:"[id].[chunkHash].js",
		path:path.join(devPath,'/src'),
		publicPath:"/"
	},
	devtool:"source-map",
	module:{
		rules:[
			{
				test:/\.css$/g,
				loader:"style-loader!css-loader"
			},
			{
				test:/\.js$/g,
				loader:"babel-loader"
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.join(devPath,'/src/index.html')
		})
	]
};

const compiler = webpack(config);

app.use(compiler,{
	publicPath:config.output.publicPath
});

app.listen(3000,function(){
	console.log('server has running at localhost:3000')
})

