const path = require('path');
const glob = require('glob');
const entryFiles = glob('../entry/multiple/src/js/*.js');
const getEntry = (type)=>{
    /*
    * @param type 1 对象格式  2 数组格式
    * */
    const getPath = (pathInEntry)=> path.resolve(__dirname,'../entry'+pathInEntry)
    switch (type) {
        case 1:{
            return {
                'a':getPath('/multiple/src/js/a.js'),
                'b':getPath('/multiple/src/js/b.js')
            }
        };
        break;
        case 2:{
            return [getPath('/multiple/src/js/a.js'),getPath('/multiple/src/js/b.js')]
        }

    }
}
module.exports = {
    entry:getEntry(1),
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