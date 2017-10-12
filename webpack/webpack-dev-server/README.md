# webpack-dev-server

webpack-dev-server是一个微型的express服务器，是用来搭建前端开发环境的，主要是提供了起服务，热刷新等功能。

### 安装

```
 npm install webpack webpack-dev-server --save-dev
```

### 使用


### 配置


### 注意事项


### 笔记

1. webpack-dev-server作用就是在某一个目录下起了一个服务，然后以这个目录下的index.html为入口，分析依赖，构建开发环境

2. webpack-dev-server和webpack.config.js的配合是这样的

*  先利用webpack-dev-server起了一个服务器，
*  然后会读取output配置中的代码，然后生成一份bundle.js，把这个js存在内存中
*  这个服务器默认会读取当前的index.html去展示，这个index.html中就可以引入我们已经生成好的在内存中的bundle.js，从而展示出来
