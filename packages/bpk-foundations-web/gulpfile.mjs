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

import path from 'path';
import { fileURLToPath } from 'url';

import { deleteAsync } from 'del';
import gulp from 'gulp';
import gulpTheo from 'gulp-theo';
import _ from 'lodash';
import gulpMerge from 'merge2';
import theo from 'theo';

import bpkEs6Js from './formatters/bpk.es6.js.mjs';
import bpkCommonJs from './formatters/bpk.common.js.mjs';
import bpkDts from './formatters/bpk.d.ts.mjs';

import bpkScss from './formatters/bpk.scss.mjs';
import bpkDefaultScss from './formatters/bpk.default.scss.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAW_FORMATS = {
  web: ['raw.json'],
};

const PLATFORM_FORMATS = {
  web: ['scss', 'default.scss', 'common.js', 'es6.js', 'es6.d.ts'],
};

const createTokenSets = (formats) =>
  _.flatten(
    Object.keys(formats).map((platform) =>
      formats[platform].map((format) =>
        typeof format !== 'string'
          ? { platform, ...format }
          : { platform, format },
      ),
    ),
  );

const rawTokenSets = createTokenSets(RAW_FORMATS);
const platformTokenSets = createTokenSets(PLATFORM_FORMATS);

theo.registerFormat('scss', bpkScss);
theo.registerFormat('default.scss', bpkDefaultScss);
theo.registerFormat('es6.js', bpkEs6Js);
theo.registerFormat('common.js', bpkCommonJs);
theo.registerFormat('es6.d.ts', bpkDts);

gulp.task('clean', (done) => deleteAsync(['tokens'], done));

const createTokens = (tokenSets, done) => {
  const streams = tokenSets.map(({ format, nest, platform }) => {
    let outputPath = 'tokens';
    if (nest) {
      outputPath = `${outputPath}/${platform}`;
    }

    return gulp
      .src([`./src/*.json`])
      .pipe(
        gulpTheo({
          transform: { type: platform },
          format: { type: format },
        }),
      )
      .on('error', done)
      .pipe(gulp.dest(path.resolve(__dirname, outputPath)))
      .on('error', done)
      .on(`finish`, () => {
        // eslint-disable-next-line no-console
        console.log('Completed tokens');
      });
  });

  gulpMerge(streams).on('finish', done);
};

const createRawTokens = (done) => createTokens(rawTokenSets, done);
const createPlatformTokens = (done) => createTokens(platformTokenSets, done);

gulp.task('tokens:raw', createRawTokens);

gulp.task('tokens:platform', createPlatformTokens);

gulp.task(
  'tokens',
  gulp.series(gulp.parallel('clean', 'lint'), 'tokens:raw', 'tokens:platform'),
);

gulp.task('default', gulp.series('tokens'));
