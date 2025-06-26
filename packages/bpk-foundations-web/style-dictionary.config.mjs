import path from 'path';
import { fileURLToPath } from 'url';

import StyleDictionary from 'style-dictionary';

// Import custom formatters
import bpkCommonJs from './formatters/bpk.common.js.mjs';
import bpkDts from './formatters/bpk.d.ts.mjs';
import bpkDefaultScss from './formatters/bpk.default.scss.mjs';
import bpkEs6Js from './formatters/bpk.es6.js.mjs';
import bpkScss from './formatters/bpk.scss.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// theo.registerFormat('scss', bpkScss);
// theo.registerFormat('default.scss', bpkDefaultScss);
// theo.registerFormat('es6.js', bpkEs6Js);
// theo.registerFormat('common.js', bpkCommonJs);
// theo.registerFormat('es6.d.ts', bpkDts);

// Register custom formats
// StyleDictionary.registerFormat({ name: 'scss', formatter: bpkScss });
// StyleDictionary.registerFormat({
//   name: 'default.scss',
//   formatter: bpkDefaultScss,
// });
// StyleDictionary.registerFormat({ name: 'es6.js', formatter: bpkEs6Js });
// StyleDictionary.registerFormat({
//   name: 'common.js',
//   formatter: bpkCommonJs,
// });
// StyleDictionary.registerFormat({
//   name: 'es6.d.ts',
//   formatter: bpkDts,
// });

export default {
  source: ['./src/*.json'],
  platforms: {
    raw: {
      buildPath: 'tokens/',
      files: [
        {
          destination: 'base.raw.json',
          format: 'json',
        },
      ],
    },
    web: {
      transformGroup: 'js', // or define custom one later
      buildPath: 'tokens/',
      files: [
        {
          destination: 'base.scss',
          format: 'scss',
        },
        {
          destination: 'base.default.scss',
          format: 'default.scss',
        },
        {
          destination: 'base.common.js',
          format: 'common.js',
        },
        {
          destination: 'base.es6.js',
          format: 'es6.js',
        },
        {
          destination: 'base.es6.d.ts',
          format: 'es6.d.ts',
        },
      ],
    },
  },
};
