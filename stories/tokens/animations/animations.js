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

import './animations.scss';

/**
 *
 * @param {String} duration element animation duration
 * @param {String} name display the name of the animation token
 * @returns {Node} The html node to be displayed
 */
const createAnimationObject = (duration, name) => {
  const animationContainer = document.createElement('div');
  animationContainer.className = 'bpk-animation-container';

  const animationObject = document.createElement('div');
  animationObject.style.animationDuration = duration;
  animationObject.className = 'bpk-animation-object';

  const animationName = document.createElement('div');
  animationName.className = 'bpk-animation-name';
  animationName.innerText = name;

  animationContainer.appendChild(animationObject);
  animationContainer.appendChild(animationName);
  return animationContainer;
};

export default createAnimationObject;
