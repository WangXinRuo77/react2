const path = require('path');
module.exports = {
	entry:"./js_loader/index.js",
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'js_loader')
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