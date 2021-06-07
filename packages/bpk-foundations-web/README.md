# @skyscanner/bpk-foundations-web

> Design tokens for colours, spacing, font, etc.

## Installation

```sh
npm install @skyscanner/bpk-foundations-web --save-dev
```

## Usage

### Sass:

```scss
@import '~@skyscanner/bpk-foundations-web/tokens/base.default.scss';

.my-selector {
  padding: $bpk-spacing-base;
}
```

### JavaScript (ES6 module):

For web:

```js
// Individual tokens
import { spacingBase } from '@skyscanner/bpk-foundations-web/tokens/base.es6';

console.log(spacingBase);

// Whole token categories
import { colors } from '@skyscanner/bpk-foundations-web/tokens/base.es6';

console.log(colors.colorSkyGrayTint01);

// All tokens
import * as tokens from '@skyscanner/bpk-foundations-web/tokens/base.es6';

console.log(tokens);
```

### JavaScript (CommonJS):

```js
// Individual tokens
import { spacingBase } from '@skyscanner/bpk-foundations-web/tokens/base.common';

console.log(spacingBase);

// All tokens
import * as tokens from '@skyscanner/bpk-foundations-web/tokens/base.common';

console.log(tokens);
```

## Transparency

It is possible to add opacity to Backpack color tokens as follows:

```js
import { colorSkyBlue } from '@skyscanner/bpk-foundations-web/tokens/base.common';
import { setOpacity } from '@skyscanner/bpk-foundations-web';

const transparentBlue500 = setOpacity(colorSkyBlue, 0.7);

console.log(transparentBlue500);
```
