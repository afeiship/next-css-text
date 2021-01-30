/*!
 * name: @jswork/next-css-text
 * description: Dom css text.
 * homepage: https://github.com/afeiship/next-css-text
 * version: 1.0.1
 * date: 2021-01-30 21:25:14
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var kebabCase = nx.kebabCase || require('@jswork/next-kebab-case');

  var NxCssText = nx.declare('nx.CssText', {
    statics: {
      css2obj: function (inString) {
        var obj = {},
          s = inString
            .toLowerCase()
            .replace(/-(.)/g, function (m, g) {
              return g.toUpperCase();
            })
            .replace(/;\s?$/g, '')
            .split(/:|;/g);
        for (var i = 0; i < s.length; i += 2)
          obj[s[i].replace(/\s/g, '')] = s[i + 1].replace(/^\s+|\s+$/g, '');
        return obj;
      },
      obj2css: function (inObject) {
        var inlineStyle = [];
        nx.forIn(inObject, function (key, value) {
          var name = kebabCase(key);
          if (typeof value === 'number' && value !== 0) {
            value = value + 'px';
          } else if (Array.isArray(value)) {
            value = value
              .map(function (val) {
                if (typeof val === 'number' && val !== 0) {
                  return val + 'px';
                }
                return val;
              })
              .join(' ');
          }

          inlineStyle.push(name + ':' + value + ';');
        });
        return inlineStyle.join(' ');
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxCssText;
  }
})();
