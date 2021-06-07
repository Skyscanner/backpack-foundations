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

import fs from 'fs';
import path from 'path';

import del from 'del';
import gulp from 'gulp';
import theo from 'theo';
import gulpTheo from 'gulp-theo';
import { flatten } from 'lodash';
import gulpMerge from 'merge2';
import jsonLint from 'gulp-jsonlint';

import transformDarkValues from '../../utils/transformDarkValues';

import bpkIosJson from './formatters/bpk.ios.json';
import bpkRawJson, { bpkRawJsonIos } from './formatters/bpk.raw.json';

const RAW_FORMATS = {
  ios: ['raw.ios.json'],
};

const PLATFORM_FORMATS = {
  ios: ['ios.json'],
};

const createTokenSets = (formats) =>
  flatten(
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

theo.registerFormat('raw.json', bpkRawJson);
theo.registerFormat('ios.json', bpkIosJson);
theo.registerFormat('raw.ios.json', bpkRawJsonIos);

theo.registerTransform('ios', ['color/hex8rgba']);

gulp.task('clean', (done) => del(['tokens'], done));

gulp.task('lint', () =>
  gulp
    .src('./src/*.json')
    .pipe(jsonLint())
    .pipe(jsonLint.reporter())
    .pipe(jsonLint.failAfterError()),
);

const createTokens = (tokenSets, done) => {
  const streams = tokenSets.map(({ platform, format, nest }) => {
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
      .pipe(transformDarkValues())
      .on('error', done)
      .pipe(gulp.dest(path.resolve(__dirname, outputPath)))
      .on('error', done)
      .on(`finish`, () => {
        const oldPath = path.resolve(outputPath, `base.${format}`);
        const newPath = path.resolve(
          outputPath,
          `base.${format}`.split('IOS_').join(''),
        );
        if (oldPath !== newPath) {
          fs.renameSync(oldPath, newPath);
        }
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
