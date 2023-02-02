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

import './radii.scss';

const createRadiusObject = (size, name) => {
  const radiusContainer = document.createElement('div');
  radiusContainer.className = 'bpk-radius-container';

  const radiusObject = document.createElement('div');
  radiusObject.style.borderRadius = size;
  radiusObject.className = 'bpk-radius-object';

  const radiusName = document.createElement('div');
  radiusName.className = 'bpk-radius-name';
  radiusName.innerText = name;

  radiusContainer.appendChild(radiusObject);
  radiusContainer.appendChild(radiusName);
  return radiusContainer;
};

const sortRadiiByRemValue = (radii) => 
  Object.entries(radii).sort(
    function(a,b) {
      return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
    }
  )

export { sortRadiiByRemValue };
export default createRadiusObject;
