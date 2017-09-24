const path = require('path');

module.exports={
    entry:path.resolve(__dirname,'../loaders/jsx/index.js'),
    output:{
        filename:"[name].js",
        path:path.resolve(__dirname,'../loaders/jsx/dist')
    }
}