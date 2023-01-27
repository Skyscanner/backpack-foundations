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

import {
  coreColors,
  lineColors,
  marcommsColors,
  statusColors,
  surfaceColors,
  textColors,
} from '../../../packages/bpk-foundations-web/tokens/base.es6';

import createColourContainer from './colours';

export default {
  title: 'Guidelines / Colour',
};

const Template = (args) => {
  const { colourGroup } = args;

  const storyWrapper = document.createElement('div'); // eslint-disable-line no-undef
  storyWrapper.style.display = 'flex';
  storyWrapper.style.flexWrap = 'wrap';

  Object.keys(colourGroup).forEach((colour) => {
    const colourContainer = createColourContainer(colourGroup[colour], colour);
    storyWrapper.appendChild(colourContainer);
    return storyWrapper;
  });
  return storyWrapper;
};

export const CoreColour = Template.bind({});
CoreColour.args = {
  colourGroup: coreColors,
};

export const LineColour = Template.bind({});
LineColour.args = {
  colourGroup: lineColors,
};

export const MarcommsColour = Template.bind({});
MarcommsColour.args = {
  colourGroup: marcommsColors,
};

export const StatusColour = Template.bind({});
StatusColour.args = {
  colourGroup: statusColors,
};

export const SurfaceColour = Template.bind({});
SurfaceColour.args = {
  colourGroup: surfaceColors,
};

export const TextColour = Template.bind({});
TextColour.args = {
  colourGroup: textColors,
};
