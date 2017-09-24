const path = require('path');

module.exports={
    entry:path.resolve(__dirname,'../loaders/jsx/index.js'),
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'../loaders/jsx/dist')
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['react','es2015']
                }
            },
        ]
    }
}