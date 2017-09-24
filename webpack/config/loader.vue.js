const path = require('path');
module.exports = {
    entry:path.resolve(__dirname,'../loaders/vue/index.js'),
    output:{
        filename:'dist.js',
        path:path.resolve(__dirname,'../loaders/vue')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader",
            },
            {
                test:/\.js$/,
                loader:"babel-loader"
            }
        ]
    }
}