/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
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

import { borders } from '../../../packages/bpk-foundations-web/tokens/base.es6';

import createBorderObject from './borders';

export default {
  title: 'Tokens / Border',
};

const Template = () => {
  const storyWrapper = document.createElement('div'); // eslint-disable-line no-undef

  Object.keys(borders).forEach((border) => {
    const borderObject = createBorderObject(borders[border], border);
    storyWrapper.appendChild(borderObject);
    return storyWrapper;
  });
  return storyWrapper;
};

export const Border = Template.bind({});