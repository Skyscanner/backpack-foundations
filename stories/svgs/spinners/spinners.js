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

import './spinners.scss';

/**
 *
 * @param {String} spinner path to current spinner to be displayed
 * @param {String} name display the name of the icon
 * @returns {Node} The html node to be displayed
 */
const createSpinnerContainer = (spinner, name) => {
  const spinnerContainer = document.createElement('div');
  spinnerContainer.className = 'bpk-spinner-container';

  const spinnerSwatch = document.createElement('div');
  spinnerSwatch.className = `bpk-spinner-swatch bpk-spinner-swatch--${name}`;
  spinnerSwatch.style.backgroundImage = `url(${spinner})`;

  const spinnerName = document.createElement('div');
  spinnerName.className = 'bpk-spinner-name';
  spinnerName.innerText = name;

  spinnerContainer.appendChild(spinnerSwatch);
  spinnerContainer.appendChild(spinnerName);

  return spinnerContainer;
};

export default createSpinnerContainer;
