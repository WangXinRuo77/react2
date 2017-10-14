# webpack-dev-server


webpack-dev-server是一个微型的express服务器，是用来搭建前端开发环境的，主要是提供了起服务，热刷新等功能。

### 目的

我们期望使用webpack-dev-server搭建起来一个react的开发环境，类似于vue-cli的简化版本，实现react作为view层的功能，然后给一个热刷新以及jsx语法的编译，用来学习webpack-dev-server应该差不多了。



### 依赖

```
	// 安装webpack webpack-dev-server构建工具
  npm install webpack webpack-dev-server --save-dev
  // 安装react核心库
  npm install react react-dom --save
  // 安装babel编译
  npm install babel babel-core babel-preset-es2015 babel-preset-react

```


### 配置

webpack-dev-server的配置就不能用webpack来执行了，他得用webpack-dev-server这个工具来执行，也就是

``` 
	webpack-dev-server --config path/to/config.js
```
如何你的配置文件名为`webpack.config.js`那也可以直接使用`webpack-dev-server`执行
 

### 注意事项


### 笔记

1. webpack-dev-server作用就是在某一个目录下起了一个服务，然后以这个目录下的index.html为入口，分析依赖，构建开发环境

2. webpack-dev-server和webpack.config.js的配合是这样的

*  先利用webpack-dev-server起了一个服务器，
*  然后会读取output配置中的代码，然后生成一份bundle.js，把这个js存在内存中
*  这个服务器默认会读取当前的index.html去展示，这个index.html中就可以引入我们已经生成好的在内存中的bundle.js，从而展示出来
