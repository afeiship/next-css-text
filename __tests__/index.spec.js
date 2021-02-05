(function () {
  const NxCssText = require('../src');

  describe('NxCssText.methods', function () {

    test('NxCssText:obj2css obj should transform to string', () => {
      const data = {
        color: '#f00',
        backgroundColor: 'red',
        width: 100,
        padding: [10, 20]
      };

      expect(NxCssText.obj2css(data)).toBe(
        'color:#f00; background-color:red; width:100px; padding:10px 20px;'
      );
    });

    test('css2obj should transform to obj', () => {
      var str = 'color:#f00; background-color:red; width:100px; padding:10px 20px;';
      expect(NxCssText.css2obj(str)).toEqual({
        color: '#f00',
        backgroundColor: 'red',
        width: '100px',
        padding: '10px 20px'
      });
    });

    test('css2obj emtpy css should get null', () => {
      expect(NxCssText.css2obj('')).toBe(null);
      expect(NxCssText.css2obj(undefined)).toBe(null);
    });
  });
})();
