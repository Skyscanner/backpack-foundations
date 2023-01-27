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

/* eslint-disable no-undef */

import './colours.scss';

const createColourContainer = (backgroundColor, name) => {
  const colourContainer = document.createElement('div');
  colourContainer.className = 'bpk-colour-container';

  const colourSwatch = document.createElement('div');
  colourSwatch.className = 'bpk-colour-swatch';
  colourSwatch.style.backgroundColor = backgroundColor;

  const colourName = document.createElement('div');
  colourName.className = 'bpk-colour-name';
  colourName.innerText = name;

  colourContainer.appendChild(colourSwatch);
  colourContainer.appendChild(colourName);

  return colourContainer;
};

export default createColourContainer;
