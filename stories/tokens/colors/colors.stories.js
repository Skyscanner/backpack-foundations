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
  coreColors,
  lineColors,
  marcommsColors,
  statusColors,
  surfaceColors,
  textColors,
} from '../../../packages/bpk-foundations-web/tokens/base.es6';

import createColorContainer from './colors';

export default {
  title: 'Guidelines / Colour',
};

const Template = (args) => {
  const { colorGroup } = args;

  const storyWrapper = document.createElement('div'); // eslint-disable-line no-undef
  storyWrapper.style.display = 'flex';
  storyWrapper.style.flexWrap = 'wrap';

  Object.keys(colorGroup).forEach((color) => {
    const colorContainer = createColorContainer(colorGroup[color], color);
    storyWrapper.appendChild(colorContainer);
    return storyWrapper;
  });
  return storyWrapper;
};

export const CoreColor = Template.bind({});
CoreColor.args = {
  colorGroup: coreColors,
};

export const LineColor = Template.bind({});
LineColor.args = {
  colorGroup: lineColors,
};

export const MarcommsColor = Template.bind({});
MarcommsColor.args = {
  colorGroup: marcommsColors,
};

export const StatusColor = Template.bind({});
StatusColor.args = {
  colorGroup: statusColors,
};

export const SurfaceColor = Template.bind({});
SurfaceColor.args = {
  colorGroup: surfaceColors,
};

export const TextColor = Template.bind({});
TextColor.args = {
  colorGroup: textColors,
};
