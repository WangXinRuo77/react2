const path = require('path');
module.exports = {
	entry:"./loader_js/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'loader_js')
	},
	module:{
    loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
    ]
	}
}