# webpack

webpack是一个打包器，通过分析依赖关系网络，构建依赖关系树，根据关系树打包出来一份代码。


### 四个核心概念

* 入口entry
* 出口output
* 加载器loader
* 插件plugins

### demo列表

```
	—|	config
			—| config.md
	—|  loader
			—| css
			—| js
			—| csspre
			—| font
			—| image
	—|  plugin
```

### 杂项

webpack并没有内置了对es6语法的支持
module中loader的配置，写test的时候不需要加引号

style-loader会把引入的css文件打包到head中的style标签中，这样是不合适的，应该使用某一个插件将他放到新的css文件中



### 命令行

--config     可以更改webpack只能运行webpack.config.js的问题  webpack --config webpack.rename.js 
--watch      监听文件变化，刷新页面后即可看到效果，不需要重新执行webpack命令

注意事项

### 常用插件


extract-text-webpack-plugin

将多个css/less/sass/stylus文件打包成一个

[官方地址](https://github.com/webpack-contrib/extract-text-webpack-plugin)











### 如何加载css预编译语言  less/sass/scss/styl


css

npm install css-loader style-loader --save-dev

{
	test:/\.css/,
	use:['css-loader','style-loader']
}

less

npm install less less-loader --save-dev

{
	test:/\.less/,
	use:['css-loader','style-loader','less-loader']
}

sass/scss

npm intall sass-loader node-sass --save-dev 

{
	test:/\.sass/,
	use:['css-loader','style-loader','sass-loader']
},
{
	test:/\.scss/,
	use:['css-loader','style-loader','scss-loader']
}

stylus

npm install stylus-loader --save-dev
{
	test:/\.styl$/,
	use:['stylus-loader','css-loader','style-loader']
}
