
### 介绍
主要是为了对json添加注释语句的支持。（直接用js也可以实现同样的效果，但是不够语义化）
缺点是需要编辑器对jsonx文件做支持才有相应的代码提示

### 安装

```bash
# npm
npm install --save-dev json-loader
# yarn
yarn add jsonx-loader -D
```

### 行内使用

```js
const json = require('jsonx-loader!./file.jsonx');
```

### 配置

```js
const json = require('./file.jsonx');
```

**webpack.config.js**
```js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.jsonx$/,
        loader: 'jsonx-loader'
      }
    ]
  }
}
```
