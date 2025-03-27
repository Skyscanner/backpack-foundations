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

import _ from 'lodash';

import { blockComment } from '../../../utils/formatters/license-header.mjs';

import { performTokenOperations } from './utils.mjs';

export const tokenTemplate = ({ name, type, value }) => {
  let tokenValue = value;

  if (type === 'function') {
    return null;
  }

  if (/\+|\*/.test(value)) {
    tokenValue = performTokenOperations(value);
  }

  return `${_.camelCase(name)}: "${tokenValue.replace(/"/g, '\\"')}"`;
};

export default (result) => {
  const { props } = result.toJS();
  const source = `
module.exports = {
  ${_.map(
    props.filter((tokens) => tokens.type !== 'function'),
    (prop) => tokenTemplate(prop),
  ).join(',\n  ')}
};`;

  return [blockComment, source].join('\n');
};
