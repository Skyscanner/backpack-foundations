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

const bpkRawJson = (result) => {
  const { aliases, props } = result.toJS();
  const propsObj = _.keyBy(props, 'name');
  const propKeys = Object.keys(propsObj);

  return JSON.stringify({ aliases, props: propsObj, propKeys }, null, 2);
};

export default bpkRawJson;

export const bpkRawJsonAndroid = (result) => bpkRawJson(result);
