# zip

Visit the [API documentation](http://whnpm.cestc.cn/registry) for a list of all methods available.

## Install

```bash
npm install @cestc/zip --save
```

## Quick Start

```js
var zip = require('@cestc/zip'); 
// options(fileName: require:true 指定项目中需要压缩的文件名, outputName: require:false, 指定压缩包名)
zip('fileName', 'outputName')
```

## output

```js
zip('fileName')
fileName_20200615133050.zip

zip('fileName', 'outputName')
outputName_20200615133050.zip
```
