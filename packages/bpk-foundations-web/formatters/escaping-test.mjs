/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2021 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import es6Formatter, {
  tokenTemplate as es6TokenTemplate,
  categoryTemplate as es6CategoryTemplate,
} from './bpk.es6.js.mjs';
import dtsFormatter, {
  tokenTemplate as dtsTokenTemplate,
  categoryTemplate as dtsCategoryTemplate,
} from './bpk.d.ts.mjs';
import commonFormatter, {
  tokenTemplate as commonTokenTemplate,
} from './bpk.common.js.mjs';

const LINE_SEPARATOR = String.fromCharCode(0x2028);
const PARAGRAPH_SEPARATOR = String.fromCharCode(0x2029);

// Any of these characters appearing unescaped in the generated source would
// either break the string literal (line terminators) or silently corrupt the
// emitted value. This is the class of `js/incomplete-sanitization` the fix
// guards against, so no generated snippet should contain them raw.
const RAW_UNSAFE = new RegExp(
  `[\\n\\r${LINE_SEPARATOR}${PARAGRAPH_SEPARATOR}]`,
);

// Hostile token values that previously broke or corrupted the generated
// module (see CodeQL alerts #4, #5, #6).
const HOSTILE_VALUES = {
  'trailing backslash': 'foo\\',
  'embedded backslash': 'back\\slash',
  'embedded double quote': 'he said "hi"',
  newline: 'a\nb',
  'carriage return': 'a\rb',
  tab: 'a\tb',
  'line separator (U+2028)': `a${LINE_SEPARATOR}b`,
  'paragraph separator (U+2029)': `a${PARAGRAPH_SEPARATOR}b`,
  'null character': `a${String.fromCharCode(0)}b`,
  combined: `foo\\"bar\n${LINE_SEPARATOR}`,
};

// Strip a generated line down to just the value literal so it can be evaluated
// back into the original JavaScript value.
const extractLiteral = (line, formatter) => {
  switch (formatter) {
    case 'es6':
      return line.replace(/^export const \w+ = /, '').replace(/;$/, '');
    case 'd.ts':
      return line
        .replace(/^export declare const \w+ = /, '')
        .replace(/ as const;$/, '');
    case 'common':
      return line.replace(/^\w+: /, '');
    default:
      throw new Error(`Unknown formatter ${formatter}`);
  }
};

const roundTrip = (line, formatter) =>
  // eslint-disable-next-line no-eval
  eval(`(${extractLiteral(line, formatter)})`);

describe('token string literal escaping', () => {
  const formatters = [
    { name: 'es6', template: es6TokenTemplate },
    { name: 'd.ts', template: dtsTokenTemplate },
    { name: 'common', template: commonTokenTemplate },
  ];

  formatters.forEach(({ name: formatter, template }) => {
    describe(`${formatter} formatter`, () => {
      Object.entries(HOSTILE_VALUES).forEach(([description, value]) => {
        const line = template({ name: 'token', type: 'color', value });

        it(`round-trips a value containing a ${description}`, () => {
          expect(roundTrip(line, formatter)).toEqual(value);
        });

        it(`emits no raw line terminators for a ${description}`, () => {
          expect(RAW_UNSAFE.test(line)).toBe(false);
        });
      });

      // Token values are always strings, but a non-string value must still be
      // emitted as a quoted string literal rather than a bare, unquoted value
      // that would silently change the generated output shape.
      it('emits a quoted string literal for a non-string value', () => {
        const line = template({ name: 'token', type: 'color', value: 8 });

        expect(roundTrip(line, formatter)).toEqual('8');
      });

      it('returns null for a function token', () => {
        expect(
          template({ name: 'token', type: 'function', value: 'fn()' }),
        ).toBeNull();
      });

      it('resolves token operations before escaping', () => {
        const line = template({
          name: 'token',
          type: 'size',
          value: '1rem + 2.5rem',
        });

        expect(roundTrip(line, formatter)).toEqual('3.5rem');
      });
    });
  });
});

describe('categoryTemplate', () => {
  const props = [
    { name: 'brand-color-primary', category: 'colors' },
    { name: 'brand-color-secondary', category: 'colors' },
  ];

  it('groups camelCased token names for the es6 formatter', () => {
    expect(es6CategoryTemplate('colors', props)).toEqual(
      'export const colors = {\nbrandColorPrimary,\nbrandColorSecondary,\n};',
    );
  });

  it('groups camelCased token names for the d.ts formatter', () => {
    expect(dtsCategoryTemplate('colors', props)).toEqual(
      'export declare const colors = {\n' +
        'brandColorPrimary,\nbrandColorSecondary,\n} as const;',
    );
  });
});

describe('default formatter', () => {
  // Minimal stand-in for the theo result object the formatters consume.
  const result = {
    toJS: () => ({
      props: [
        {
          name: 'brand-color',
          category: 'colors',
          type: 'color',
          value: 'red',
        },
        { name: 'ignored', category: 'misc', type: 'function', value: 'fn()' },
      ],
    }),
  };

  it('emits single tokens and grouped categories for es6', () => {
    const output = es6Formatter(result);

    expect(output).toContain('export const brandColor = "red";');
    expect(output).toContain('export const colors = {\nbrandColor,\n};');
    // Function tokens are excluded from the output.
    expect(output).not.toContain('ignored');
  });

  it('emits declarations and grouped categories for d.ts', () => {
    const output = dtsFormatter(result);

    expect(output).toContain(
      'export declare const brandColor = "red" as const;',
    );
    expect(output).toContain(
      'export declare const colors = {\nbrandColor,\n} as const;',
    );
    expect(output).not.toContain('ignored');
  });

  it('emits a CommonJS module map for common', () => {
    const output = commonFormatter(result);

    expect(output).toContain('module.exports = {');
    expect(output).toContain('brandColor: "red"');
    expect(output).not.toContain('ignored');
  });
});
