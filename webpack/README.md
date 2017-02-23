# webpack

webpack是一个打包器，通过分析依赖关系网络，构建依赖关系树，根据关系树打包出来一份代码。

四个核心概念

* 入口entry
* 出口output
* 加载器loader
* 插件plugins


webpack内置了对es6语法的支持

webpack命令配置
--config     可以更改webpack只能运行webpack.config.js的问题  webpack --config webpack.rename.js 


注意事项

module中loader的配置，写test的时候不需要加引号

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

postcss现在先不管