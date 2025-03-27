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

import { getTokenUnit, performTokenOperations } from './utils.mjs';

describe('getTokenUnit', () => {
  it('should return rem if unit is rem', () => {
    expect(getTokenUnit('1rem + 2.5')).toEqual('rem');
  });
  it('should return px if unit is px', () => {
    expect(getTokenUnit('1px + 2.5')).toEqual('px');
  });
  it('should error if unit is not supported', () => {
    expect(() => getTokenUnit('em + 2.5')).toThrow(
      'Supported units are rem and px. Please specify a supported unit for em + 2.5.',
    );
  });
  it('should error if no unit is specified', () => {
    expect(() => getTokenUnit('1 + 2.5')).toThrow(
      'Supported units are rem and px. Please specify a supported unit for 1 + 2.5.',
    );
  });
  it('should error if different units are specified', () => {
    expect(() => getTokenUnit('1rem + 2.5px')).toThrow(
      'Supported units are rem and px. Please specify a supported unit for 1rem + 2.5px.',
    );
  });
});

describe('performTokenOperations', () => {
  it('should perform addition if one unit is specified', () => {
    expect(performTokenOperations('1rem + 2.5')).toEqual('3.5rem');
  });

  it('should perform addition if both units are specified', () => {
    expect(performTokenOperations('1rem + 2.5rem')).toEqual('3.5rem');
  });

  it('should perform multiplication if one unit is specified', () => {
    expect(performTokenOperations('1rem * 3')).toEqual('3rem');
  });

  it('should perform multiplication if both units are specified', () => {
    expect(performTokenOperations('1.75rem * 3.75rem')).toEqual('6.5625rem');
  });

  it('should error if there are more than 2 tokens', () => {
    expect(() => performTokenOperations('1rem * 3 * 2')).toThrow(
      'Token value is made up of more than 2 tokens. Please adjust the value of your token 1rem * 3 * 2.',
    );
  });
});
