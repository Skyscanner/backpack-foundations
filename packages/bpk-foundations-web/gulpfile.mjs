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

import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

import { deleteAsync } from 'del';
import gulp from 'gulp';
import gulpTheo from 'gulp-theo';
import _ from 'lodash';
import gulpMerge from 'merge2';
import StyleDictionary from 'style-dictionary';
import theo from 'theo';

import bpkCommonJs from './formatters/bpk.common.js.mjs';
import bpkDts from './formatters/bpk.d.ts.mjs';
import bpkDefaultScss from './formatters/bpk.default.scss.mjs';
import bpkEs6Js from './formatters/bpk.es6.js.mjs';
import bpkScss from './formatters/bpk.scss.mjs';
import config from './style-dictionary.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
StyleDictionary.registerFormat({
  name: 'raw.json',
  format: (dictionary) => {
    return JSON.stringify(dictionary, null, 2);
  }
});
StyleDictionary.registerFormat({ name: 'scss', format: bpkScss });
StyleDictionary.registerFormat({
  name: 'default.scss',
  format: bpkDefaultScss,
});
StyleDictionary.registerFormat({ name: 'es6.js', format: bpkEs6Js });
StyleDictionary.registerFormat({
  name: 'common.js',
  format: bpkCommonJs,
});
StyleDictionary.registerFormat({
  name: 'es6.d.ts',
  format: bpkDts,
});
const sd = new StyleDictionary(config);
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
// 修改任务定义，返回Promise
// const createRawTokens = () => createTokens(rawTokenSets);
// const createPlatformTokens = () => createTokens(platformTokenSets);
// theo.registerFormat('scss', bpkScss);
// theo.registerFormat('default.scss', bpkDefaultScss);
// theo.registerFormat('es6.js', bpkEs6Js);
// theo.registerFormat('common.js', bpkCommonJs);
// theo.registerFormat('es6.d.ts', bpkDts);

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

const createTokens = (tokenSets) => {
  const buildPromises = tokenSets.map(({ format, nest, platform }) => {
    let outputPath = 'tokens';
    if (nest) {
      outputPath = `${outputPath}/${platform}`;
    }
    
    console.log(`Creating tokens for ${platform} with format ${format} in ${outputPath}`);
    
    // 创建Style Dictionary实例
    const styleDictionary = new StyleDictionary({
      source: ['./src/*.json'],
      platforms: {
        [platform]: {
          transformGroup: platform === 'web' ? 'web' : platform,
          buildPath: path.resolve(__dirname, outputPath) + '/',
          files: [{
            destination: `tokens.${format}`,
            format: format
          }]
        }
      }
    });
    
    return new Promise((resolve, reject) => {
      styleDictionary.buildPlatform(platform, (error) => {
        if (error) {
          console.error(`Error building ${format} tokens for ${platform}:`, error);
          reject(error);
        } else {
          console.log(`Completed ${format} tokens for ${platform}`);
          resolve();
        }
      });
    });
  });
  
  return Promise.all(buildPromises);
};

const createRawTokens = () => createTokens(rawTokenSets);
const createPlatformTokens = () => createTokens(platformTokenSets);

gulp.task('tokens:raw', createRawTokens);

gulp.task('tokens:platform', createPlatformTokens);

gulp.task(
  'tokens',
  gulp.series(gulp.parallel('clean', 'lint'), 'tokens:raw', 'tokens:platform'),
);

gulp.task('default', gulp.series('tokens'));
