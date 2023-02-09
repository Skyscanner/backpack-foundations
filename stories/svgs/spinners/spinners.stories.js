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

import requireAll from '../utils';

import createIconContainer from './spinners';

const spinnerSizes = ['sm', 'lg', 'xl'];
const spinnerSvgs = requireAll(
  require.context(
    '../../../packages/bpk-svgs/dist/svgs/spinners',
    false,
    /\.svg$/,
  ),
);

export default {
  title: 'SVGs / Spinners',
};

export const spinners = () => {
  const storyWrapper = document.createElement('div'); // eslint-disable-line no-undef
  storyWrapper.style.display = 'flex';
  storyWrapper.style.flexFlow = 'row wrap';
  storyWrapper.style.alignItems = 'flex-end';

  spinnerSizes.forEach((spinner) => {
    const spinnerContainer = createIconContainer(spinnerSvgs[spinner], spinner);
    storyWrapper.appendChild(spinnerContainer);
    return storyWrapper;
  });
  return storyWrapper;
};
