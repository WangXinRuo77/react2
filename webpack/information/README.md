# introduce

this information project is a repo for how to manage webpack complie,build information

the point to control webpack compile information is *stats* config argument!

so. i will test every value for it. and write down every effect it is .

the office document is [HERE](https://webpack.js.org/configuration/stats/#stats)

i will introduce everyone by chinese.

# stats 

1. errors-only

仅在报错时才展示编译信息

2. minimal

只输出了`module`的数量，比如：`7 modules`

3. none

啥都不输出

4. normal

默认模式：输出hash值，webpack版本，编译时间，编译数据列表，模块详细信息。

```
Hash: 7ee911d29342c8babcbb
Version: webpack 3.8.1
Time: 1381ms
                     Asset       Size  Chunks             Chunk Names
 0.b7fb797bc63544562d3e.js    3.43 kB       0  [emitted]  main
0.b7fb797bc63544562d3e.css  595 bytes       0  [emitted]  main
                index.html  453 bytes          [emitted]
   [0] ./src/index.js 154 bytes {0} [built]
   [1] ./src/styles/main.css 41 bytes {0} [built]
   [2] ./src/scripts/main.js 106 bytes {0} [built]
   [3] ./node_modules/.0.28.7@css-loader!./src/styles/main.css 821 bytes [built]
    + 3 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
       [0] ./node_modules/.2.30.1@html-webpack-plugin/lib/loader.js!./src/index.html 710 bytes {0} [built]
       [2] (webpack)/buildin/global.js 488 bytes {0} [built]
       [3] (webpack)/buildin/module.js 495 bytes {0} [built]
        + 1 hidden module
Child extract-text-webpack-plugin node_modules/.3.0.2@extract-text-webpack-plugin/dist node_modules/.0.28.7@css-loader/index.js!src/styles/main.css:
       [0] ./node_modules/.0.28.7@css-loader!./src/styles/main.css 821 bytes {0} [built]
        + 1 hidden module
```
5. detailed

详细模式：输出比`normal模式`更为详尽的模块信息

```
Hash: 7ee911d29342c8babcbb
Version: webpack 3.8.1
Time: 1377ms
                     Asset       Size  Chunks             Chunk Names
 0.b7fb797bc63544562d3e.js    3.43 kB       0  [emitted]  main
0.b7fb797bc63544562d3e.css  595 bytes       0  [emitted]  main
                index.html  453 bytes          [emitted]
Entrypoint main = 0.b7fb797bc63544562d3e.js 0.b7fb797bc63544562d3e.css
chunk    {0} 0.b7fb797bc63544562d3e.js, 0.b7fb797bc63544562d3e.css (main) 301 bytes [entry] [rendered]
    > main [0] ./src/index.js
   [0] ./src/index.js 154 bytes {0} [depth 0] [built]
       [no exports]
   [1] ./src/styles/main.css 41 bytes {0} [depth 1] [built]
       [no exports used]
   [2] ./src/scripts/main.js 106 bytes {0} [depth 1] [built]
       [exports: default]
       [only some exports used: default]
   [3] ./node_modules/.0.28.7@css-loader!./src/styles/main.css 821 bytes [depth 2] [built]
   [4] ./node_modules/.0.28.7@css-loader/lib/css-base.js 2.26 kB [depth 3] [built]
   [5] ./node_modules/.0.19.0@style-loader/lib/addStyles.js 9.41 kB [depth 2] [built]
   [6] ./node_modules/.0.19.0@style-loader/lib/urls.js 3.01 kB [depth 3] [built]
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    chunk    {0} index.html 541 kB [entry] [rendered]
        > [0] ./node_modules/.2.30.1@html-webpack-plugin/lib/loader.js!./src/index.html
       [0] ./node_modules/.2.30.1@html-webpack-plugin/lib/loader.js!./src/index.html 710 bytes {0} [depth 0] [built]
       [1] ./node_modules/.4.17.4@lodash/lodash.js 540 kB {0} [depth 1] [built]
       [2] (webpack)/buildin/global.js 488 bytes {0} [depth 2] [built]
       [3] (webpack)/buildin/module.js 495 bytes {0} [depth 2] [built]
Child extract-text-webpack-plugin node_modules/.3.0.2@extract-text-webpack-plugin/dist node_modules/.0.28.7@css-loader/index.js!src/styles/main.css:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    chunk    {0} extract-text-webpack-plugin-output-filename 3.08 kB [entry] [rendered]
        > [0] ./node_modules/.0.28.7@css-loader!./src/styles/main.css
       [0] ./node_modules/.0.28.7@css-loader!./src/styles/main.css 821 bytes {0} [depth 0] [built]
       [1] ./node_modules/.0.28.7@css-loader/lib/css-base.js 2.26 kB {0} [depth 1] [built]
```

6. verbose
最详细的模式：比detail的更详尽的说出了模块信息，但是真没什么用
```
Hash: 7ee911d29342c8babcbb
Version: webpack 3.8.1
Time: 1285ms
                     Asset       Size  Chunks             Chunk Names
 0.b7fb797bc63544562d3e.js    3.43 kB       0  [emitted]  main
0.b7fb797bc63544562d3e.css  595 bytes       0  [emitted]  main
                index.html  453 bytes          [emitted]
Entrypoint main = 0.b7fb797bc63544562d3e.js 0.b7fb797bc63544562d3e.css
chunk    {0} 0.b7fb797bc63544562d3e.js, 0.b7fb797bc63544562d3e.css (main) 301 bytes [entry] [rendered]
    > main [0] ./src/index.js
    [0] ./src/index.js 154 bytes {0} [depth 0] [built]
        [no exports]
    [1] ./src/styles/main.css 41 bytes {0} [depth 1] [built]
        [no exports used]
        harmony import ./styles/main.css [0] ./src/index.js 1:0-27
    [2] ./src/scripts/main.js 106 bytes {0} [depth 1] [built]
        [exports: default]
        [only some exports used: default]
        harmony import ./scripts/main.js [0] ./src/index.js 3:0-45
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    chunk    {0} index.html 541 kB [entry] [rendered]
        > [0] ./node_modules/.2.30.1@html-webpack-plugin/lib/loader.js!./src/index.html
        [0] ./node_modules/.2.30.1@html-webpack-plugin/lib/loader.js!./src/index.html 710 bytes {0} [depth 0] [built]
        [1] ./node_modules/.4.17.4@lodash/lodash.js 540 kB {0} [depth 1] [built]
            cjs require ../node_modules/.4.17.4@lodash/lodash.js [0] ./node_modules/.2.30.1@html-webpack-plugin/lib/loader.js!./src/index.html 1:8-59
        [2] (webpack)/buildin/global.js 488 bytes {0} [depth 2] [built]
            cjs require global [1] ./node_modules/.4.17.4@lodash/lodash.js 1:0-48
        [3] (webpack)/buildin/module.js 495 bytes {0} [depth 2] [built]
            cjs require module [1] ./node_modules/.4.17.4@lodash/lodash.js 1:0-48
Child extract-text-webpack-plugin node_modules/.3.0.2@extract-text-webpack-plugin/dist node_modules/.0.28.7@css-loader/index.js!src/styles/main.css:
    Entrypoint undefined = extract-text-webpack-plugin-output-filename
    chunk    {0} extract-text-webpack-plugin-output-filename 3.08 kB [entry] [rendered]
        > [0] ./node_modules/.0.28.7@css-loader!./src/styles/main.css
        [0] ./node_modules/.0.28.7@css-loader!./src/styles/main.css 821 bytes {0} [depth 0] [built]
        [1] ./node_modules/.0.28.7@css-loader/lib/css-base.js 2.26 kB {0} [depth 1] [built]
            cjs require ../../node_modules/.0.28.7@css-loader/lib/css-base.js [0] ./node_modules/.0.28.7@css-loader!./src/styles/main.css 1:27-91
```