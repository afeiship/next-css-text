# next-css-text
> Dom css text.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-css-text
```

## apis
| api     | params     | description                 |
| ------- | ---------- | --------------------------- |
| css2obj | (inString) | Transform string to object. |
| obj2css | (inOjbect) | Transform object to string. |

## usage
```js
import NxCssText from '@jswork/next-css-text';

NxCssText.css2obj('color:#f00; background-color:red; width:100px; padding:10px 20px;');
NxCssText.obj2css({
  color: '#f00',
  backgroundColor: 'red',
  width: '100px',
  padding: '10px 20px'
});
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-css-text/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-css-text
[version-url]: https://npmjs.org/package/@jswork/next-css-text

[license-image]: https://img.shields.io/npm/l/@jswork/next-css-text
[license-url]: https://github.com/afeiship/next-css-text/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-css-text
[size-url]: https://github.com/afeiship/next-css-text/blob/master/dist/next-css-text.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-css-text
[download-url]: https://www.npmjs.com/package/@jswork/next-css-text
