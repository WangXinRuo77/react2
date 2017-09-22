const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:"./plugin_css/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'plugin_css/dist')
	},
    module:{
        rules:[
            {
                test:/\.less$/,
                loader:ExtractTextPlugin.extract('less-loader','style-loader','css-loader')
            }
        ]
    }
}