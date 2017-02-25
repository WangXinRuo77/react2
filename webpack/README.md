# webpack

webpack是一个打包器，通过分析依赖关系网络，构建依赖关系树，根据关系树打包出来一份代码。

四个核心概念

* 入口entry
* 出口output
* 加载器loader
* 插件plugins

列表

* helloworld 第一个webpackdemo
* css_loader 使用css-loader和style-loader的demo
* font_loader 使用file-loader加载字体
* image_loader 使用file-loader加载图片
* js_loader 使用babel-loader加载js
* pre_css_loader  使用less-loader,sass-loader,stylus-loader加载less,sass,scss,styl预编译语言


webpack内置了对es6语法的支持

webpack命令配置
--config     可以更改webpack只能运行webpack.config.js的问题  webpack --config webpack.rename.js 
--watch      监听文件变化，刷新页面后即可看到效果，不需要重新执行webpack命令

注意事项

module中loader的配置，写test的时候不需要加引号

style-loader会把引入的css文件打包到head中的style标签中，这样是不合适的，应该使用某一个插件将他放到新的css文件中

css-loader
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

sass(sass是不要{}和;的scss)
{
	test:/\.sass/,
	use:['css-loader','style-loader','sass-loader']
}

scss
{
	test:/\.scss/,
	use:['css-loader','style-loader','scss-loader']
}

