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

import { execFileSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

// Resolution is probed in a real Node subprocess rather than through Jest's
// resolver: consumers hit Node's algorithm, and Jest's differs enough that a
// pass here would not prove anything about the published package.
const REPO_ROOT = path.resolve(__dirname, '../..');
const PKG = '@skyscanner/bpk-foundations-web';

const runNode = (args, script) =>
  JSON.parse(
    execFileSync(process.execPath, [...args, '-e', script], {
      cwd: REPO_ROOT,
      encoding: 'utf8',
    }),
  );

// import.meta.resolve applies the exports map but does not check that the
// target exists, so every path it returns still has to be stat-ed below.
const resolveAsEsm = (specifiers) =>
  runNode(
    ['--input-type=module'],
    `
    import { fileURLToPath } from 'url';
    const out = {};
    for (const specifier of ${JSON.stringify(specifiers)}) {
      try {
        out[specifier] = fileURLToPath(import.meta.resolve(specifier));
      } catch {
        out[specifier] = null;
      }
    }
    process.stdout.write(JSON.stringify(out));
    `,
  );

const resolveAsCjs = (specifiers) =>
  runNode(
    [],
    `
    const out = {};
    for (const specifier of ${JSON.stringify(specifiers)}) {
      try {
        out[specifier] = require.resolve(specifier);
      } catch {
        out[specifier] = null;
      }
    }
    process.stdout.write(JSON.stringify(out));
    `,
  );

// Each of these is load-bearing for at least one known consumer. Only
// `tokens/base.es6` and `tokens/base.common` have explicit entries in the
// exports map — everything else survives solely because of the `"./*": "./*"`
// catch-all, which is why removing that entry has to fail this suite.
const PUBLIC_SUBPATHS = [
  PKG,
  `${PKG}/tokens/base.es6`,
  `${PKG}/tokens/base.es6.js`,
  `${PKG}/tokens/base.es6.d.ts`,
  `${PKG}/tokens/base.raw.json`,
  `${PKG}/tokens/base.scss`,
  `${PKG}/tokens/base.default.scss`,
  `${PKG}/package.json`,
];

describe('public exports', () => {
  describe('resolve under the import condition', () => {
    const resolved = resolveAsEsm(PUBLIC_SUBPATHS);

    it.each(PUBLIC_SUBPATHS)('%s', (specifier) => {
      expect(resolved[specifier]).not.toBeNull();
      expect(existsSync(resolved[specifier])).toBe(true);
    });
  });

  describe('resolve under the require condition', () => {
    // base.common is CommonJS and only reachable by its extensionless
    // specifier; the rest are paths real consumers require() today
    // (eslint-plugin-backpack reads base.raw.json, ds-analyser reads
    // base.es6.js off disk).
    const cjsSubpaths = [
      `${PKG}/tokens/base.common`,
      `${PKG}/tokens/base.es6`,
      `${PKG}/tokens/base.es6.js`,
      `${PKG}/tokens/base.raw.json`,
    ];
    const resolved = resolveAsCjs(cjsSubpaths);

    it.each(cjsSubpaths)('%s', (specifier) => {
      expect(resolved[specifier]).not.toBeNull();
      expect(existsSync(resolved[specifier])).toBe(true);
    });

    it('serves base.common from a .cjs file', () => {
      expect(resolved[`${PKG}/tokens/base.common`]).toMatch(/\.cjs$/);
    });
  });

  // `tokens/base.es6` deliberately has no `require` condition pointing at the
  // CommonJS build. The two are not interchangeable: the ES module formatter
  // emits an extra pass of category groups that the CommonJS one does not, so
  // routing require() to base.common.cjs would hand callers `undefined` for
  // every group. If this ever stops holding, revisit that decision rather
  // than deleting the test.
  it('ES module build is a strict superset of the CommonJS build', () => {
    const { cjsKeys, esmKeys } = runNode(
      ['--input-type=module'],
      `
      import { createRequire } from 'module';
      const esm = await import('${PKG}/tokens/base.es6');
      const require = createRequire(process.cwd() + '/');
      const cjs = require('${PKG}/tokens/base.common');
      process.stdout.write(JSON.stringify({
        esmKeys: Object.keys(esm).filter((k) => k !== 'default'),
        cjsKeys: Object.keys(cjs),
      }));
      `,
    );

    expect(cjsKeys.length).toBeGreaterThan(0);
    expect(esmKeys).toEqual(expect.arrayContaining(cjsKeys));
    expect(esmKeys.length).toBeGreaterThan(cjsKeys.length);
  });

  it('only category groups are missing from the CommonJS build', () => {
    const missingValueTypes = runNode(
      ['--input-type=module'],
      `
      import { createRequire } from 'module';
      const esm = await import('${PKG}/tokens/base.es6');
      const require = createRequire(process.cwd() + '/');
      const cjs = require('${PKG}/tokens/base.common');
      const missing = Object.keys(esm).filter(
        (k) => k !== 'default' && !(k in cjs),
      );
      process.stdout.write(
        JSON.stringify([...new Set(missing.map((k) => typeof esm[k]))]),
      );
      `,
    );

    expect(missingValueTypes).toEqual(['object']);
  });
});
