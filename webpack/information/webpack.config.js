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
  // stats:"verbose,
  stats: {
    // assets:true,
    // assetsSort:"!field",
    // cached:true,
    // cachedAssets:true,
    children:false,
    // chunks:false,
    // chunkModules:true,
    // chunkOrigins:true,
    // chunksSort:'!field',
    // context:"src"
    // colors:true,
    // depth:false,
    // entrypoints:false
    // env:false,
    // errors:true
    // errorDetails:true,
    // excludeAssets:""
    // excludeModules:"",
    // exclude:""
    hash:true,
    maxModules:2,
    modules:true,
    modulesSort:"field",
    moduleTrace:true,
    performance:true,
    providedExports:true,
    publicPath:true,
    reasons:true,
    source:true,
    timings:true,
    usedExports:false,
    version:false,
    warnings:true,
  },
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