# dmm-parser

[![npm version](https://img.shields.io/npm/v/dmm-parser.svg?style=flat-square)](https://www.npmjs.com/package/dmm-parser)
[![npm downloads](https://img.shields.io/npm/dm/dmm-parser.svg?style=flat-square)](https://www.npmjs.com/package/dmm-parser)
[![Build Status](https://img.shields.io/travis/lgaticaq/dmm-parser.svg?style=flat-square)](https://travis-ci.org/lgaticaq/dmm-parser)
[![Coverage Status](https://img.shields.io/coveralls/lgaticaq/dmm-parser/master.svg?style=flat-square)](https://coveralls.io/github/lgaticaq/dmm-parser?branch=master)
[![Code Climate](https://img.shields.io/codeclimate/github/lgaticaq/dmm-parser.svg?style=flat-square)](https://codeclimate.com/github/lgaticaq/dmm-parser)
[![dependency Status](https://img.shields.io/david/lgaticaq/dmm-parser.svg?style=flat-square)](https://david-dm.org/lgaticaq/dmm-parser#info=dependencies)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/dmm-parser.svg?style=flat-square)](https://david-dm.org/lgaticaq/dmm-parser#info=devDependencies)

> Parser for latitude and longitude in DMM format.

Example: `'3321.6735,S'` -> `-33.361225`

## Installation

```bash
$ npm i dmm-parser
```

## Use

[Try on Tonic](https://tonicdev.com/npm/dmm-parser)
```js
const dmm = require('dmm-parser');

dmm.degToDec('3321.6735,S'); // -33.361225
dmm.degToDec('07030.7640,W'); // -70.51273333333333
dmm.degToDec(-33.361225, 4); // '3321.6735,S'
dmm.degToDec(-70.51273333333333, 4); // '07030.7640,W'
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
