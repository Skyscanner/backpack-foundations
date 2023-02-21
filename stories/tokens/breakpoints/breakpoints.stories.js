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

import { breakpoints } from '../../../packages/bpk-foundations-web/tokens/base.es6';
import sortTokensByRemValue from '../utils';

import createBreakpointObject from './breakpoints';

export default {
  title: 'Tokens / Breakpoint',
};

const Template = () => {
  const storyWrapper = document.createElement('div'); // eslint-disable-line no-undef

  const sortedBreakpoints = sortTokensByRemValue(breakpoints);
  const breakpointValues = sortedBreakpoints.filter(
    (token) => !/.+margin|query/i.test(token),
  );
  const marginValues = sortedBreakpoints.filter((token) =>
    /.+margin/i.test(token),
  );

  const breakpointMarginPairs = breakpointValues.map((breakpoint, index) => [
    breakpoint,
    marginValues[index],
  ]);
  breakpointMarginPairs.forEach((pair) => {
    const breakpointValue = pair[0][1];
    const marginValue = pair[1][1];
    const breakpointName = pair[0][0];
    const breakpointObject = createBreakpointObject(
      breakpointValue,
      marginValue,
      breakpointName,
    );
    storyWrapper.appendChild(breakpointObject);
  });
  return storyWrapper;
};

export const Breakpoint = Template.bind({});
