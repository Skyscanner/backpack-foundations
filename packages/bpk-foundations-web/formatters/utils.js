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

/**
 *
 * @param {String} value token value
 * @returns {String} token unit
 */
const getTokenUnit = (value) => {
  let units = new Set();
  if (value.includes('rem')) {
      units.add('rem');
  }
  if (value.includes('px')) {
      units.add('px');
  }
  if (units.size !== 1) {
    throw new Error(
      `Supported units are rem and px. Please specify a supported unit for ${value}.`,
    )
  };
  return units.values().next().value;
};

/**
 *
 * @param {String} value token value
 * @returns {String} token value after addition/multiplication is performed
 */
const performTokenOperations = (value) => {
  let tokenValue;
  
  const tokenValues = value.split(/\+|\*/);

  if (tokenValues.length !== 2) {
    throw new Error(
      `Token value is made up of more than 2 tokens. Please adjust the value of your token ${value}.`,
    );
  }

  const unit = getTokenUnit(value);
  const [val1, val2] = tokenValues.map((val) =>
    parseFloat(val.replace(unit, '')),
  );
  if (value.includes('+')) {
    tokenValue = val1 + val2;
  } else if (value.includes('*')) {
    tokenValue = val1 * val2;
  }
  return `${tokenValue}${unit}`;
};

export { getTokenUnit, performTokenOperations };
