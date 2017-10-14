# webpack-dev-server


webpack-dev-server是一个微型的express服务器，是用来搭建前端开发环境的，主要是提供了起服务，热刷新等功能。

### 目的

我们期望使用webpack-dev-server搭建起来一个react的开发环境，类似于vue-cli的简化版本，实现react作为view层的功能，然后给一个热刷新以及jsx语法的编译，用来学习webpack-dev-server应该差不多了。

### 用法

git clone git@github.com:wangerniu/automake.git

cd automake/webpack/webpack-dev-server

npm install

npm run dev


### 笔记

1. webpack-dev-server作用就是在某一个目录下起了一个服务，然后以这个目录下的index.html为入口，分析依赖，构建开发环境

2. webpack-dev-server和webpack.config.js的配合是这样的

		*  先利用webpack-dev-server起了一个服务器，
		*  然后会读取output配置中的代码，然后生成一份bundle.js，把这个js存在内存中
		*  这个服务器默认会读取当前的index.html去展示，这个index.html中就可以引入我们已经生成好的在内存中的bundle.js，从而展示出来
