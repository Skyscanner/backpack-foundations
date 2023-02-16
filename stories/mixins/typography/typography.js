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

import './typography.scss';

/**
 *
 * @param {String} string The string to be capitalised
 * @returns {String} The string capitalised
 */
const capitalizeWord = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

/**
 *
 * @param {String} style element text style
 * @returns {Node} The html node to be displayed
 */
const createTextStyleContainer = (style) => {
  const container = document.createElement('div');

  const text = document.createElement('p');
  text.innerText = capitalizeWord(style.replace(/-/g, ' '));
  text.className = `bpk-text bpk-text--${style}`;

  container.appendChild(text);
  return container;
};

export default createTextStyleContainer;
