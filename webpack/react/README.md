# introduce 

a project build by `react` ,`react-router`,`redux` and `antd`.


#usage

```
	npm install webpack-dev-server -g
```


### resolved

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
