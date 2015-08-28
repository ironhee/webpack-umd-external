var _ = require('underscore');


module.exports = function webpackUMDExternal(externals) {
  return _.mapObject(externals, function mapper(externalKey, requireKey) {
    return {
      'root': externalKey,
      'amd': requireKey,
      'commonjs': requireKey,
      'commonjs2': requireKey
    };
  });
}
