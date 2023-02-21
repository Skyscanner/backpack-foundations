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

/* eslint-disable no-undef */

import './breakpoints.scss';

const createBreakpointObject = (breakpoint, margin, name) => {
  const breakpointContainer = document.createElement('div');
  breakpointContainer.className = 'bpk-breakpoint-container';
  breakpointContainer.style.width = breakpoint;

  const breakpointObject = document.createElement('div');
  breakpointObject.className = 'bpk-breakpoint-object';

  const breakpointMarginObject = document.createElement('div');
  breakpointMarginObject.className = 'bpk-breakpoint-margin-object';
  breakpointMarginObject.style.width = margin;
  breakpointMarginObject.style.height = margin;

  const breakpointMarginContainer = document.createElement('div');
  breakpointMarginContainer.className = 'bpk-breakpoint-margin-container';

  const breakpointName = document.createElement('div');
  breakpointName.className = 'bpk-breakpoint-name';
  breakpointName.innerText = name;

  breakpointMarginContainer.appendChild(breakpointMarginObject);
  breakpointMarginContainer.appendChild(breakpointMarginObject.cloneNode());

  breakpointContainer.appendChild(breakpointName);
  breakpointContainer.appendChild(breakpointMarginContainer);
  breakpointContainer.appendChild(breakpointObject);
  
  return breakpointContainer;
};

export default createBreakpointObject;
