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

import { textPrimaryDay } from '../../../packages/bpk-foundations-web/tokens/base.es6';
import './borders.scss';

/**
 *
 * @param {String} size element border width
 * @param {String} name display the name of the border token
 * @returns {Node} The html node to be displayed
 */
const createBorderObject = (size, name) => {
  const borderContainer = document.createElement('div');
  borderContainer.className = 'bpk-border-container';

  const borderObject = document.createElement('div');
  borderObject.style.borderBottom = `${size} solid ${textPrimaryDay}`;
  borderObject.className = 'bpk-border-object';

  const borderName = document.createElement('div');
  borderName.className = 'bpk-border-name';
  borderName.innerText = name;

  borderContainer.appendChild(borderObject);
  borderContainer.appendChild(borderName);
  return borderContainer;
};

export default createBorderObject;
