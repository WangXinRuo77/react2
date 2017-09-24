const path = require('path');
module.exports = {
	entry:path.resolve(__dirname,'../loaders/js/index.js'),
	output:{
		filename:"dist.js",
		path:path.resolve(__dirname,'../loaders/js/dist')
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
        },
        {
            test:/\.css$/,
            loader:"style-loader!css-loader"
        }
    ]
	}
}