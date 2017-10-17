# introduce 

a project build by `react` ,`react-router`,`redux` and `antd`.


# usage

```
	npm install webpack-dev-server -g
```


# questions

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

add a `exclude` in webpack.dev.conf.js.[stackoverflow](https://stackoverflow.com/questions/43161151/react-photoswipe-using-removed-babel-5-option)

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

