# 2021-08-05

**Breaking:**

- bpk-svgs: 12.7.3 => 14.0.0
  - Updated small and xl spinners to use the new spacing compatible versions.

# 2021-08-05

**Added:**

- @skyscanner/bpk-foundations-android: 1.0.0 => 1.1.0
- @skyscanner/bpk-foundations-ios: 1.0.0 => 1.1.0
- @skyscanner/bpk-foundations-react-native: 1.0.0 => 1.1.0
- @skyscanner/bpk-foundations-web: 1.0.0 => 1.1.0
  - New `text-icon-spacing` token. This is the spacing that should be placed between icons and text.

**Changed:**

- @skyscanner/bpk-foundations-web: 1.0.0 => 1.1.0
  - The following button tokens are now deprecated. To migrate, use an equivalent spacing value.
    - `$button-padding-x`
    - `$button-padding-y`
    - `$button-padding-x-icon-only`
    - `$button-icon-border-radius`
    - `$button-icon-border-radius-lg`
    - `$button-large-padding-x`
    - `$button-large-padding-y`
    - `$button-large-padding-x-icon-only`
  
  - The following select tokens are now deprecated. To migrate, use an equivalent spacing value.
    - `$bpk-select-height`
    - `$bpk-select-padding-top`
    - `$bpk-select-padding-right`
    - `$bpk-select-padding-bottom`
    - `$bpk-select-padding-left`

**Fixed:**

- @skyscanner/bpk-svgs: 12.7.2 => 12.7.3
  - Fixed an issue with the world icons being mixed up.

# 2021-06-07 - Renaming packages to avoid confusion

Renamed packages to avoid confusion with what they are and their contents.

- @skyscanner/bpk-web => @skyscanner/bpk-foundations-web: 1.0.0
- @skyscanner/bpk-react-native => @skyscanner/bpk-foundations-rn: 1.0.0
- @skyscanner/bpk-ios => @skyscanner/bpk-foundations-ios: 1.0.0
- @skyscanner/bpk-android => @skyscanner/bpk-foundations-android: 1.0.0

# 2021-06-02 - `@skyscanner/bpk-svgs` updates

**Fixed:**
- bpk-svgs: 12.7.0 => 12.7.1
  - Updated to the latest assets as per old `bpk-svgs`

**Added:**
- @skyscanner/bpk-svgs: 12.6.4 => 12.7.0
  - Added missing files used for creating zip file when used in Backpack docs site.

# 2021-06-01 - Fix for `@skyscanner/bpk-web`

**Fixed:**

- @skyscanner/bpk-web: 1.0.0 => 1.0.1
  - Fixed an issue when generating tokens for the spacing functions.

# 2021-06-01 - Inital release

Inital release of new foundation libraries:

- @skyscanner/bpk-android: 1.0.0
- @skyscanner/bpk-common: 1.0.0
- @skyscanner/bpk-ios: 1.0.0
- @skyscanner/bpk-react-native: 1.0.0
- @skyscanner/bpk-svgs: 12.6.3
- @skyscanner/bpk-web: 1.0.0