# unusual-effects
A Node.js wrapper for Team Fortress 2's Unusual particle effects.

[![npm version](https://img.shields.io/npm/v/unusual-effects.svg?style=flat-square)](https://npmjs.com/package/unusual-effects)
[![node version](https://img.shields.io/node/v/unusual-effects?style=flat-square)](https://nodejs.org/en/about/releases/)
[![npm test](https://img.shields.io/github/actions/workflow/status/SnaBe/node-unusual-effects/test.yml?logo=github&branch=master&style=flat-square)](https://github.com/SnaBe/node-unusual-effects/actions/workflows/test.yml)
[![dependencies](https://img.shields.io/librariesio/release/npm/unusual-effects?style=flat-square)](https://www.npmjs.com/package/unusual-effects)
[![npm downloads](https://img.shields.io/npm/dm/unusual-effects.svg?style=flat-square)](https://npmjs.com/package/unusual-effects)
[![license](https://img.shields.io/npm/l/unusual-effects.svg?style=flat-square)](https://github.com/SnaBe/node-unusual-effects/blob/master/LICENSE)
[![paypal](https://img.shields.io/badge/paypal-donate-yellow.svg?style=flat-square)](https://www.paypal.me/snabe)

## Installation

Using [npm](https://www.npmjs.com/package/unusual-effects):
```bash
$ npm install unusual-effects
```

Using [yarn](https://yarnpkg.com/package/unusual-effects):
```bash
$ yarn add unusual-effects
```

## Testing 
Using [npm](https://docs.npmjs.com/cli/v8/commands/npm-run-script):
```bash
$ npm test
```

Using [yarn](https://classic.yarnpkg.com/lang/en/docs/cli/run/):
```bash
$ yarn test
```

## Examples

### Importing with `CommonJS`

```js
const { getEffectByName } = require('unusual-effects')
```

### or with `ES6's import` statement

```js
import { getEffectByName } from 'unusual-effects'
```

### Get `Backpack.tf particle images` using the effect's name

```js
console.log(getEffectByName('Nebula').images)
```

There are some more examples available in the [test](https://github.com/SnaBe/node-unusual-effects/tree/master/test) directory.

## Documentation

Version [2.0.0](https://github.com/SnaBe/node-unusual-effects/releases/tag/v2.0.0) includes breaking changes, please see the newly updated [Wiki pages](https://github.com/SnaBe/node-unusual-effects/wiki) for further documentation.

## License

[MIT](LICENSE)

Copyright 2024, Simon Sørensen
