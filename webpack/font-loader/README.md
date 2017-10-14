# webpack解析iconfont

webpack解析iconfont主要是需要使用`file-loader`这个包，需要注意的几点：

1. iconfont中会有svg的存在，所以写loader的时候要把svg的loadeer也写上，可以写在iconfont中也可以写在image的loader中

2. iconfont可以给一个limit属性，如果filesize在多少一下直接就用编码就表示了。