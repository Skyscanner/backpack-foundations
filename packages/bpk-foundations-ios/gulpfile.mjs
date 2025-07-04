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
import { fileURLToPath } from 'url';

import { deleteAsync } from 'del';
import { exec } from 'child_process';
import gulp from 'gulp';
import gulpTheo from 'gulp-theo';
import _ from 'lodash';
import gulpMerge from 'merge2';
import theo from 'theo';

import transformDarkValues from '../../utils/transformDarkValues.mjs';

import bpkIosJson from './formatters/bpk.ios.json.mjs';
import bpkRawJson, { bpkRawJsonIos } from './formatters/bpk.raw.json.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAW_FORMATS = {
  ios: ['raw.ios.json'],
};

const PLATFORM_FORMATS = {
  ios: ['ios.json'],
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

theo.registerFormat('raw.json', bpkRawJson);
theo.registerFormat('ios.json', bpkIosJson);
theo.registerFormat('raw.ios.json', bpkRawJsonIos);

theo.registerTransform('ios', ['color/hex8rgba']);

gulp.task('clean', (done) => deleteAsync(['tokens'], done));

gulp.task('lint', (done) => {
  exec('eslint ./src --ext json', (err, stdout, _) => {
    if (err) {
      console.error(stdout);
      done(err);
    } else {
      console.log(stdout);
      done();
    }
  });
});

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
