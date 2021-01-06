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

import androidTokenAliases from '../src/base/aliases.json';

const getCorrespondingFontSizeTokens = (aliases, letterSpacingKey) => {
  let modifier = null;
  if (letterSpacingKey.includes('TEXT')) {
    [, modifier] = letterSpacingKey.split('_');
  } else {
    [, , modifier] = letterSpacingKey.split('_');
  }
  const fontSizeKey = `FONT_SIZE_${modifier}`;
  return aliases.aliases[fontSizeKey];
};

const getCorrespondingFontSizeTokensAndroid = letterSpacingKey =>
  getCorrespondingFontSizeTokens(androidTokenAliases, letterSpacingKey);

const adjustTypographyAndroid = prop => {
  let adjustedValue = prop.value;
  if (prop.type === 'letter-spacing') {
    const correspondingFontSize = getCorrespondingFontSizeTokensAndroid(
      prop.name,
    );
    if (correspondingFontSize === undefined) {
      throw new Error(
        `A suitable adjustment for token ${prop.name} could not be found as no corresponding font-size exists`,
      );
    }
    adjustedValue = parseFloat(prop.value) / correspondingFontSize;
  }
  return { ...prop, value: adjustedValue };
};

const adjustTypography = (prop, platform) => {
  return adjustTypographyAndroid(prop);
};

export default adjustTypography;
export {
  adjustTypographyAndroid,
};
