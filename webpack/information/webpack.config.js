const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry:path.resolve(__dirname,'src/index.js'),
  output:{
    filename:"[id].[chunkHash].js",
    path:path.resolve(__dirname,'dist')
  },
  // stats:"errors-only",
  // stats: "minimal",
  // stats:"none",
  // stats:"normal",
  // stats:"detailed",
  stats:"verbose",
  module:{
    loaders: [
      {
        test:/\.js$/,
        loaders:"babel-loader",
        exclude:/node_modules/,
      },
      {
        test:/\.css$/,
        use:ExtractTextWebpackPlugin.extract({
          fallback:"style-loader",
          use:["css-loader"]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'src/index.html')
    }),
    new ExtractTextWebpackPlugin('[id].[chunkHash].css')
  ]
}