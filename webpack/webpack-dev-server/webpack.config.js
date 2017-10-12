const path = require('path');

module.exports = {
	context:path.resolve(__dirname),
	entry:'./src/index.js',
	output:{
		filename:"bundle.js",
		path:__dirname
	}
}