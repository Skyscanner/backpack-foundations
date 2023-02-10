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
 * Shared function to sort tokens asc based on their rem values.
 * @param {Object} tokens Object which contains token name and value pairs
 * @returns {Array} of items sorted by token value, where each item is an array containing token name and value
 */
export default function sortTokensByRemValue(tokens) {
  const tokenValues = Object.entries(tokens).map(([name, value]) => [
    name,
    value.replace('rem', ''),
  ]);
  tokenValues.sort((a, b) => a[1] - b[1]);
  const tokensSorted = tokenValues.map(([name, value]) => [
    name,
    value.concat('rem'),
  ]);

  return tokensSorted;
}
