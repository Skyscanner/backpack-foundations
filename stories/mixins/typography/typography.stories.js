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

import createTextStyleContainer from './typography';
import {
  heroStyles,
  headingStyles,
  bodyStyles,
  labelStyles,
} from './typography-styles';

export default {
  title: 'Mixins / Typography',
};

const Template = (args) => {
  const { textStyleGroup } = args;

  const storyWrapper = document.createElement('div'); // eslint-disable-line no-undef

  textStyleGroup.forEach((style) => {
    const textContainer = createTextStyleContainer(style);
    storyWrapper.appendChild(textContainer);
  });
  return storyWrapper;
};

export const Hero = Template.bind({});
Hero.args = {
  textStyleGroup: heroStyles,
};

export const Heading = Template.bind({});
Heading.args = {
  textStyleGroup: headingStyles,
};

export const Body = Template.bind({});
Body.args = {
  textStyleGroup: bodyStyles,
};

export const Label = Template.bind({});
Label.args = {
  textStyleGroup: labelStyles,
};
