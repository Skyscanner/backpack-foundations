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

export const nameTemplate = ({ name }) => `$bpk-${_.kebabCase(name)}`;

export const valueTemplate = ({ type, value }) =>
  type === 'media-query' ? `"${value}"` : value;

export const variableTemplate = ({ name, type, value }) => {
  if (type === 'function') {
    return `${value}`;
  }
  return `${nameTemplate({ name })}: ${valueTemplate({ value, type })};`;
};

export const sassDocTemplate = ({ category }) => `/// @group ${category}`;

export const template = ({ category, name, type, value }) =>
  `${sassDocTemplate({ category })}\n${variableTemplate({
    name,
    value,
    type,
  })}`;

export default (result) => {
  const { props } = result.toJS();

  return [blockComment, _.map(props, (prop) => template(prop)).join('\n')].join(
    '\n',
  );
};
