# Install
```
npm install -D webpack-umd-external
```

# Usage

before
```javascript
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
  externals: {
    'jquery': {
      root: '$',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    },
    'lodash': {
      root: '_',
      commonjs2: 'lodash',
      commonjs: 'lodash',
      amd: 'lodash'
    },
    'q': {
      root: 'Q',
      commonjs2: 'q',
      commonjs: 'q',
      amd: 'q'
    }
  }
};
```

after
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
