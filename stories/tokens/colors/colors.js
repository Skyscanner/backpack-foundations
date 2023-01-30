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

import './colors.scss';

const createColorContainer = (backgroundColor, name) => {
  const colorContainer = document.createElement('div');
  colorContainer.className = 'bpk-color-container';

  const colorSwatch = document.createElement('div');
  colorSwatch.className = 'bpk-color-swatch';
  colorSwatch.style.backgroundColor = backgroundColor;

  const colorName = document.createElement('div');
  colorName.className = 'bpk-color-name';
  colorName.innerText = name;

  colorContainer.appendChild(colorSwatch);
  colorContainer.appendChild(colorName);

  return colorContainer;
};

export default createColorContainer;