const path = require('path');

module.exports = {
    entry:path.resolve(__dirname,'../entry/single/src/index.js'),
    output:{
        path:path.resolve(__dirname,'../entry/single/dist'),
        filename:"index.min.js"
    },
    module:{
        rules:[
            {
                test:/\.css$/g,
                loaders:"style-loader!css-loader"
            }
        ]
    }
}