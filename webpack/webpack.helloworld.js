const path = require('path');
module.exports = {
	entry:"./helloworld/index.js",
	output:{
		path:path.resolve(__dirname,'helloworld'),
		filename:"bundle.js"
	}
}