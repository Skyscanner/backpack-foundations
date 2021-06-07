# @skyscanner/bpk-foundations-react-native

> React Native design tokens for colours, spacing, font, etc.

## Installation

```sh
npm install @skyscanner/bpk-foundations-react-native --save-dev
```

## Usage

### JavaScript (ES6 module):

For React Native:

```js
// Individual tokens
import { spacingBase } from '@skyscanner/bpk-foundations-react-native/tokens/base.react.native';

console.log(spacingBase);

// Whole token categories
import { colors } from '@skyscanner/bpk-foundations-react-native/tokens/base.react.native';

console.log(colors.colorSkyGrayTint01);

// All tokens
import * as tokens from '@skyscanner/bpk-foundations-react-native/tokens/base.react.native';

console.log(tokens);
```

For web:

```js
// Individual tokens
import { spacingBase } from '@skyscanner/bpk-foundations-react-native/tokens/base.es6';

console.log(spacingBase);

// Whole token categories
import { colors } from '@skyscanner/bpk-foundations-react-native/tokens/base.es6';

console.log(colors.colorSkyGrayTint01);

// All tokens
import * as tokens from '@skyscanner/bpk-foundations-react-native/tokens/base.es6';

console.log(tokens);
```

### JavaScript (CommonJS):

```js
// Individual tokens
import { spacingBase } from '@skyscanner/bpk-foundations-react-native/tokens/base.common';

console.log(spacingBase);

// All tokens
import * as tokens from '@skyscanner/bpk-foundations-react-native/tokens/base.common';

console.log(tokens);
```

## Transparency

It is possible to add opacity to Backpack color tokens as follows:

```js
import { colorSkyBlue } from '@skyscanner/bpk-foundations-react-native/tokens/base.react.native';
import { setOpacity } from '@skyscanner/bpk-foundations-react-native';

const transparentBlue500 = setOpacity(colorSkyBlue, 0.7);

console.log(transparentBlue500);
```
