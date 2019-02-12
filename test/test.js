(function() {
  var nx = require('next-js-core2');
  var NxCssText = require('../src/next-css-text');

  describe('NxCssText.methods', function() {
    test('serialize', function() {
      var data = {
        key: 1,
        value: 2
      };
      var rs = NxCssText.serialize(data);

      expect(rs).toBe('key:1;value:2;');
      // console.log(rs);
    });

    test('unserialize', function() {
      var data = 'visibility: hidden; display: none; height: 55px;';
      var rs = NxCssText.unserialize(data);

      expect(rs).toEqual({ visibility: 'hidden', display: 'none', height: '55px' });
      // console.log(rs);
    });
  });
})();
