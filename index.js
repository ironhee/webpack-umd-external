'use strict';


var _ = require('lodash');


module.exports = function webpackUMDExternal(externals) {
  return _.mapValues(externals, function mapper(externalKey, requireKey) {
    return {
      'root': externalKey,
      'amd': requireKey,
      'commonjs': requireKey,
      'commonjs2': requireKey
    };
  });
}
