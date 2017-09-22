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

### entry
