# Install
```
npm install -D webpack-umd-external
```

# Usage

```javascript
var webpackUMDExternal = require('webpack-umd-external');

module.exports = {
  entry: {
    'myModule': './src/my_module.js'
  },
  output: {
    path: './dist/',
    filename: 'my_module.js',
    library: 'MyModule',
    libraryTarget: 'umd'
  },
  externals: transformUMDExternal({
    'jquery': '$',
    'lodash': '_',
    'q': 'Q'
  })
};
```
