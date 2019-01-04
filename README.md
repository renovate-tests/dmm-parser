# @drivetech/dmm-parser

[![npm version](https://img.shields.io/npm/v/@drivetech/dmm-parser.svg?style=flat-square)](https://www.npmjs.com/package/@drivetech/dmm-parser)
[![npm downloads](https://img.shields.io/npm/dm/@drivetech/dmm-parser.svg?style=flat-square)](https://www.npmjs.com/package/@drivetech/dmm-parser)
[![Build Status](https://travis-ci.org/Drivetech/dmm-parser.svg?branch=master)](https://travis-ci.org/Drivetech/dmm-parser)
[![Coverage Status](https://coveralls.io/repos/github/Drivetech/dmm-parser/badge.svg?branch=master)](https://coveralls.io/github/Drivetech/dmm-parser?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/33c101fcae3f0aa81ad2/maintainability)](https://codeclimate.com/github/Drivetech/dmm-parser/maintainability)
[![dependencies Status](https://david-dm.org/Drivetech/dmm-parser/status.svg)](https://david-dm.org/Drivetech/dmm-parser)
[![devDependencies Status](https://david-dm.org/Drivetech/dmm-parser/dev-status.svg)](https://david-dm.org/Drivetech/dmm-parser?type=dev)

> Parser for latitude and longitude in DMM format.

Example: `'3321.6735,S'` -> `-33.361225`

## Installation

```bash
$ npm i @drivetech/dmm-parser
```

## Use

[Try on Tonic](https://tonicdev.com/npm/@drivetech/dmm-parser)
```js
const dmm = require('@drivetech/dmm-parser');

dmm.degToDec('3321.6735,S'); // -33.361225
dmm.degToDec('07030.7640,W'); // -70.51273333333333
dmm.latToDmm(-33.361225, 4); // '3321.6735,S'
dmm.lngToDmm(-70.51273333333333, 4); // '07030.7640,W'
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
