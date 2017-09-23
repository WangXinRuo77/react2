const path = require('path');

module.exports = {
    entry:{
        'a':path.resolve(__dirname,'../entry/multiple/src/js/a.js'),
        'b':path.resolve(__dirname,'../entry/multiple/src/js/b.js')
    },
    output:{
        path:path.resolve(__dirname,'../entry/multiple/dist'),
        filename:"[name].js",
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loaders:"style-loader!css-loader"
            }
        ]
    }
}