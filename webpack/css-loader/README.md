# webpack关于css的解析

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

### sass/scss

### stylus 