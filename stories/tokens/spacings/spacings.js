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

import './spacings.scss';

/**
 *
 * @param {String} size element width and height to visualise spacing token
 * @param {String} name display the name of the spacing token
 * @returns {Node} The html node to be displayed
 */
const createSpacingObject = (size, name) => {
  const spacingContainer = document.createElement('div');
  spacingContainer.className = 'bpk-spacing-container';

  const spacingObject = document.createElement('div');
  spacingObject.style.width = size;
  spacingObject.style.height = size;
  spacingObject.className = 'bpk-spacing-object';

  const spacingName = document.createElement('div');
  spacingName.className = 'bpk-spacing-name';
  spacingName.innerText = name.replace('V2', '');

  spacingContainer.appendChild(spacingObject);
  spacingContainer.appendChild(spacingName);
  return spacingContainer;
};

export default createSpacingObject;
