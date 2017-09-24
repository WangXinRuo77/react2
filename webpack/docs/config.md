# webpack官方配置

下面是[webpack官方配置](//webpack.js.org/configuration/) 好像被墙了，希望看官方文档的同学需要自备一下梯子。

```
const path = require('path');

module.exports = {
  entry: "./app/entry",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",  

    publicPath: "/assets/",  

    library: "MyLibrary", 

    libraryTarget: "umd", 
  },
  module: { 
    rules: [ 
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: [
          path.resolve(__dirname, "app/demo-files")
        ], 
        issuer: { test, include, exclude }, 

        enforce: "pre",
        enforce: "post", 

        loader: "babel-loader",

        options: {
          presets: ["es2015"]
        }, 
      },
      {
        test: /\.html$/,

        use: [ 
          "htmllint-loader",
          {
            loader: "html-loader",
            options: { 
            }
          }
        ]
      },
      { oneOf: [ /* rules */ ] }, 

      { rules: [ /* rules */ ] }, 

      { resource: { and: [ /* conditions */ ] } }, 

      { resource: { or: [ /* conditions */ ] } },
      { resource: [ /* conditions */ ] }, 

      { resource: { not: /* condition */ } } 
    ],
  },
  resolve: { 
    modules: [
      "node_modules",
      path.resolve(__dirname, "app")
    ], 
    extensions: [".js", ".json", ".jsx", ".css"], 
    alias: { 

      "module": "new-module", 

      "only-module$": "new-module",
       
      "module": path.resolve(__dirname, "app/third/module.js"), 
    }, 
  },
  performance: {
    hints: "warning", 
    maxAssetSize: 200000, 
    maxEntrypointSize: 400000, 
    assetFilter: function(assetFilename) { 
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
    }
  },
  devtool: "source-map", 
  context: __dirname, 
  target: "web",  
  externals: ["react", /^@angular\//], 
  stats: "errors-only", 
  devServer: {
    proxy: {  
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'),  
    compress: true,  
    historyApiFallback: true,  
    hot: true, 
    https: false,  
    noInfo: true,   
  },
  plugins: [ 
  ], 
  resolveLoader: {   } 
  parallelism: 1,  
  profile: true, 
  bail: true,  
  cache: false, 
  watch: true,  
  watchOptions: {
    aggregateTimeout: 1000, 

    poll: true,
    poll: 500,  
  }
  node: { 
    console: false,  
    global: true,  
    process: true,  
    __filename: "mock",  
    __dirname: "mock", 
    Buffer: true, 
    setImmediate: true  
  },
  recordsPath: path.resolve(__dirname, "build/records.json"),
  recordsInputPath: path.resolve(__dirname, "build/records.json"),
  recordsOutputPath: path.resolve(__dirname, "build/records.json"),
}
```

## entry

entry 是webpack打包你的应用程序的入口，必选项，参数类型可以为string,object,array。支持单入口与多入口。

### 单入口

单入口的配置异常的简单，只需要将入口js文件的路径赋值给entry属性即可

```
const path = require('path');
module.exports= {
  entry:path.resolve(__dirname,'path/to/entry.js')
}
```

### 多入口

多入口的webpack配置有两种方式，数组方式与对象方式。

数组方式是将未知的多个文件打包成一个，适用于开发资源的管理与打包
```
 entry:['path/to/a.js','path/to/b.js',...]
```
而对象方式则是将已知的文件数量一个一个列出来打包成一个，适用于第三方库的打包
```
 entry:{
   'a':'path/to/a.js',
   'b':'path/to/b.js'
 }
```
