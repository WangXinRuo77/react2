# webpack关于css的解析

### 使用

git clone git@github.com:wangerniu/automake.git

cd automake/webpack/css-loader

npm install

npm run parse

运行`npm run parse`之后可以更改`src/ui`下的ui文件，刷新浏览器即可看到效果

### style-loader

`style-loader`的作用是将解析出来的css文件作为`<style></style>`标签中，然后在插入html中，想要将css文件提取出来需要插件`extracttextplugin`。

### less

解析less文件需要两个包：`less`和`less-loader`

```
	{
		test:/\.less$/,
		loader:"style-loader!css-loader!less-loader",
		include:/path/src/,
		exclude:/node_modules/
	}
```

### css
```
	{
		test:/\.css/,
		loader:"style-loader!css-loader"
	}
```

### sass/scss

解析sass/scss需要`sass-loader`和`node-sass` 

```
	{
		test:/\.sass/,
		loader:"style-loader!css-loader!sass-loader"
	}
```

### stylus 

解析styl需要`stylus`和`stylus-loader`

```
	{
		test:/\.styl/,
		loader:"style-loader!css-loader!stylus-loader"
	}
```