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

import {
  iconSizeSm,
  iconSizeLg,
} from '../../../packages/bpk-foundations-web/tokens/base.es6';
import requireAll from '../utils';

import createIconContainer from './icons';

const sm = requireAll(
  require.context(
    '../../../packages/bpk-svgs/dist/svgs/icons/sm',
    false,
    /\.svg$/,
  ),
);
const lg = requireAll(
  require.context(
    '../../../packages/bpk-svgs/dist/svgs/icons/lg',
    false,
    /\.svg$/,
  ),
);

export default {
  title: 'SVGs / Icons',
};

const Template = (args) => {
  const { icons, size } = args;

  const storyWrapper = document.createElement('div'); // eslint-disable-line no-undef
  storyWrapper.style.display = 'flex';
  storyWrapper.style.flexWrap = 'wrap';
  storyWrapper.style.flexDirection = 'column';

  Object.keys(icons).forEach((icon) => {
    const iconContainer = createIconContainer(icons[icon], size, icon);
    storyWrapper.appendChild(iconContainer);
  });
  return storyWrapper;
};

export const smallIcons = Template.bind({});
smallIcons.args = {
  icons: sm,
  size: iconSizeSm,
};

export const largeIcons = Template.bind({});
largeIcons.args = {
  icons: lg,
  size: iconSizeLg,
};
