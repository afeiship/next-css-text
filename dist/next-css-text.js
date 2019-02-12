(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxCompact = nx.compact || require('next-compact');

  var NxCssText = nx.declare('nx.CssText', {
    statics: {
      serialize: function(inObject) {
        var result = '';
        nx.forIn(inObject, function(key, value) {
          result += key + ':' + value + ';';
        });
        return result;
      },
      // visibility: hidden; display: none; height: 55px;
      unserialize: function(inString) {
        var pairs = nxCompact(inString.split(';'));
        var result = {};
        nx.forEach(pairs, function(pair) {
          var kvs = pair.split(':');
          result[kvs[0].trim()] = kvs[1].trim();
        });
        return result;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCssText;
  }
})();
