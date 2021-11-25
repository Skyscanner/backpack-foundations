# 2021-11-25

**Fixed:**

- @skyscanner/bpk-foundations-web: 4.1.0 => 4.1.1
  - Changed `bpk-badge-padding-x` and `bpk-badge-padding-y` tokens to use the new spacing grid.

**Changed:**

- @skyscanner/bpk-foundations-ios: 1.1.0 => 1.2.0
  - The `TEXT_SECONDARY_DARK_COLOR` token value is now `SKY_GRAY_TINT_04`.

# 2021-11-19

**Changed:**

- @skyscanner/bpk-foundations-web: 4.0.0 => 4.1.0
  - The `$bpk-banner-alert-header-padding-x` and `$bpk-banner-alert-header-padding-y` tokens are now deprecated. To migrate, use equivalent spacing values.

# 2021-11-10

**Breaking:**

- @skyscanner/bpk-foundations-android: 1.1.0 => 2.0.0
  - Removed letter spacing tokens

# 2021-11-09

**Fixed:**

- @skyscanner/bpk-svgs: 14.0.9 => 14.0.10
  - Properly align self-service 16px icon.
# 2021-11-09

**Added:**

- @skyscanner/bpk-svgs: 14.0.8 => 14.0.9
  - New self-service icons 16px and 24px.

# 2021-10-04

**Breaking:**

- @skyscanner/bpk-foundations-web: 3.0.0 => 4.0.0
  - Changed `bpk-modal-content-padding` token to use the new spacing grid.

# 2021-09-30

**Fixed:**

- @skyscanner/bpk-svgs: 14.0.6 => 14.0.7
  - Fix world small icons which weren't rendering correctly on iOS.
# 2021-09-27

**Breaking:**

- @skyscanner/bpk-foundations-web: 2.1.1 => 3.0.0
  - Changed `bpk-card-padding` token to use the new spacing grid.

# 2021-09-07

**Changed:**

- @skyscanner/bpk-foundations-web: 2.1.0 => 2.1.1
  - The `bpk-textarea-min-height` token is now deprecated. To migrate, use an equivalent spacing value.

# 2021-09-01

**Changed:**

- @skyscanner/bpk-foundations-web 2.0.0 => 2.1.0
  - Created new aliases that represent the height of the buttons
  - Changed input tokens to use the new aliases
  - Changed input tokens to use the new grid horizontally

# 2021-08-27

**Breaking:**

- @skyscanner/bpk-foundations-web: 1.2.1 => 2.0.0
  - Updated flare tokens to use the new grid.

# 2021-08-20

**Changed:**

- @skyscanner/bpk-foundations-web: 1.2.0 => 1.2.1
  - The `bpk-modal-header-padding` token is now deprecated. To migrate, use an equivalent spacing value.

# 2021-08-11


@skyscanner/bpk-foundations-web: 1.1.0 => 1.2.0
  **Added:**
  - Add breakpoint-query-above-desktop

  **Changed:**
  - The following rating tokens are now deprecated. To migrate, use an equivalent spacing value
      - `bpk-rating-base-width`
      - `bpk-rating-base-height`
      - `bpk-rating-sm-width`
      - `bpk-rating-sm-height`
      - `bpk-rating-lg-width`
      - `bpk-rating-lg-height`

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
