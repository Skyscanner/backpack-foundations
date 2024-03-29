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

import { boxShadows } from '../../../packages/bpk-foundations-web/tokens/base.es6';

import createShadowObject from './shadows';

export default {
  title: 'Tokens / Shadow',
};

const Template = () => {
  const storyWrapper = document.createElement('div'); // eslint-disable-line no-undef
  storyWrapper.style.display = 'flex';
  storyWrapper.style.flexWrap = 'wrap';

  Object.keys(boxShadows).forEach((shadow) => {
    const shadowObject = createShadowObject(boxShadows[shadow], shadow);
    storyWrapper.appendChild(shadowObject);
  });
  return storyWrapper;
};

export const Shadow = Template.bind({});
