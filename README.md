# introduce 

a project build by `react` ,`react-router`,`redux` and `antd`.


# usage

```
	npm install webpack-dev-server -g
```




# questions

1. how to place some method and varible  which is used in whole application. just like some regexp ?

2. why webpack-dev-server recompile so snow and must reload this page?

3. why webpack-dev-server will throw error never stop. it has threw more than 50 thousand?

4. how to make .css,.less,.sass,.styl etc, style file compiled by css-loader,less-loader,sass-loader,stylus-loader, and then make output in one css file?

# resolved

```

Module build failed: Unknown word (5:1)
  3 // load the styles
  4 | var content = require("!!./normalize.css");
> 5 | if(typeof content === 'string') content = [[module.id, content, '']];
    | ^
  6 | // Prepare cssTransformation
  7 | var transform;
  8 |

```

use `style-loader!css-loader` instead of `css-loader!style-loader`


```
Module build failed: ReferenceError: [BABEL] D:\automake\webpack\react\node_modules\attr-accept\dist\index.js: Using removed Babel 5 option: D:\automake\webpack\react\node_modules\attr-accept\.babelrc.stage - Check out the corresponding stage-x presets
```

add a `exclude` in webpack.dev.conf.js.

reference link: [stackoverflow](https://stackoverflow.com/questions/43161151/react-photoswipe-using-removed-babel-5-option)

```
	{
		test:/\.jsx?$/,
		loader:"babel-loader",
		exclude:/node_modules/,
		query:{
			presets:['react','es2015']
		}
	}
```

### references

[react-router-dom](https://reacttraining.com/react-router/web/example/basic)

### experience 

1. how to increase the speed of webpack first building and rebuild?

* use cheap-module-eval-source-map instead of other devtools can improve 40% speed

2. if using webpack-dev-server as http server ,so stats configure should be writen at *devServer*,should not be webpack config.
### reference

1. vue-cli