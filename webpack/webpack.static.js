const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry:"./static_loader/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'static_loader')
	},
	module:{
        rules:[
            {
                test:/\.sass$/,
                loader:  ExtractTextPlugin.extract({
                    use:[
                        {
                            loader:"css-loader",
                        }
                        {
                            loader:"style-loader",
                        }
                        {
                            loader:"sass-loader",
                        }
                    ],
                    publicfile:path.resolve(__dirname,'static_loader/dist_css')
                })
            },
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            }
        ]
	}
}