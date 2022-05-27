# 2022-05-26

**Fixed:**

- bpk-mixins:
    - Remove custom font weight from `bpk-button--link`.

# 2022-05-24

**Added:**

- bpk-mixins: 31.0.0 => 31.1.0
    - Added new breakpoint mixins:
        - `bpk-breakpoint-small-tablet`

# 2022-05-12

**Breaking:**

- bpk-foundations-web: 7.0.0 => 8.0.0
    - Updated breakpoint tokens. If you are using any of the following tokens, please ensure your component still looks good with the new breakpoints.
        - `$bpk-breakpoint-mobile`, `breakpointMobile`
        - `$bpk-breakpoint-tablet`, `breakpointTablet`
        - `$bpk-breakpoint-desktop`, `breakpointDesktop`
        - `$bpk-breakpoint-query-above-mobile`, `breakpointQueryAboveMobile`
        - `$bpk-breakpoint-query-above-tablet`, `breakpointQueryAboveTablet`
        - `$bpk-breakpoint-query-above-desktop`, `breakpointQueryAboveDesktop`
        - `$bpk-breakpoint-query-mobile`, `breakpointQueryMobile`
        - `$bpk-breakpoint-query-tablet`, `breakpointQueryTablet`
        - `$bpk-breakpoint-query-tablet-only`, `breakpointQueryTabletOnly`
    - Modal max width tokens are using breakpoint tokens under the hood and therefore the following tokens have also changed:
        - `$bpk-modal-max-width`, `modalMaxWidth`
        - `$bpk-modal-wide-max-width`, `modalWideMaxWidth`

- bpk-mixins: 30.0.0 => 31.0.0
    - Updated breakpoint mixins. If you are using any of the following mixins, please ensure your component still looks good with the new breakpoints.
        - `bpk-breakpoint-mobile`
        - `bpk-breakpoint-tablet`
        - `bpk-breakpoint-tablet-only`
        - `bpk-breakpoint-above-mobile`
        - `bpk-breakpoint-above-tablet`

**Added:**

- bpk-foundations-web: 7.0.0 => 8.0.0
    - Added new breakpoint tokens:
        - `$bpk-breakpoint-small-mobile`, `breakpointSmallMobile`
        - `$bpk-breakpoint-small-tablet`, `breakpointSmallTablet`
        - `$bpk-breakpoint-query-small-mobile`, `breakpointQuerySmallMobile`
        - `$bpk-breakpoint-query-small-tablet`, `breakpointQuerySmallTablet`
        - `$bpk-breakpoint-query-small-tablet-only`, `breakpointQuerySmallTabletOnly`

    - Added new breakpoint margin tokens that should be used as a white space on the left-and-right of the screen:
        - `$bpk-breakpoint-small-mobile-margin`, `breakpointSmallMobileMargin`
        - `$bpk-breakpoint-mobile-margin`, `breakpointMobileMargin`
        - `$bpk-breakpoint-small-tablet-margin`, `breakpointSmallTabletMargin`
        - `$bpk-breakpoint-tablet-margin`, `breakpointTabletMargin`
        - `$bpk-breakpoint-desktop-margin`, `breakpointDesktopMargin`

- bpk-mixins: 30.0.0 => 31.0.0
    - Added new breakpoint mixins:
        - `bpk-breakpoint-small-mobile`
        - `bpk-breakpoint-small-tablet-only`

# 2022-05-12

**Breaking:**

- bpk-foundations-web: 6.2.0 => 7.0.0
    - Changed list margin tokens:
        - List item margins:
            - `$bpk-list-item-margin-bottom`, `listItemMarginBottom`: `0` to `0.25rem`
        - List margins:
            - `$bpk-list-margin-bottom`, `listMarginBottom`: `0.75rem` to `1rem`
            - `$bpk-list-margin-top`, `listMarginTop`: `0` to `1rem`

- bpk-mixins: 29.0.0 => 30.0.0
    - `bpk-list-item` mixin - added bottom margin 
    - `bpk-list--nested` mixin - added top and bottom padding
    - `bpk-list` mixin - added top margin and changed bottom margin

# 2022-04-22

**Breaking:**

- bpk-mixins: 28.3.0 => 29.0.0
- bpk-stylesheets: 7.1.30 => 7.1.31
  - Removed differing `typography` styles that were applied when on mobile devices to keep the same style as when on desktop.

# 2022-04-14

**Added:**

- bpk-mixins:
    - Added new `bpk-label-3` typography mixin.

# 2022-04-13

**Added:**

- @skyscanner/bpk-foundations-web: 6.1.1 => 6.2.0
    - Added tokens for the new `BpkButtonSecondaryOnDark` and `BpkButtonLinkOnDark` buttons:
      - `BpkButtonSecondaryOnDark`: </br>
        - Background colour: </br>
            `$bpk-button-secondary-on-dark-background-color` </br>
            `$bpk-button-secondary-on-dark-active-background-color` </br>
            `$bpk-button-secondary-on-dark-hover-background-color` </br>
            `$bpk-button-secondary-on-dark-disabled-background-color` </br>
        - Background image: </br>
            `$bpk-button-secondary-on-dark-background-image` </br>
            `$bpk-button-secondary-on-dark-active-background-image` </br>
            `$bpk-button-secondary-on-dark-hover-background-image` </br>
            `$bpk-button-secondary-on-dark-disabled-background-image` </br>
        - Text colour: </br>
            `$bpk-button-secondary-on-dark-color` </br>
            `$bpk-button-secondary-on-dark-active-color` </br>
            `$bpk-button-secondary-on-dark-hover-color` </br>
            `$bpk-button-secondary-on-dark-disabled-color` </br>
      - `BpkButtonLinkOnDark`: </br>
        - Text colour: </br>
            `$bpk-button-link-on-dark-color` </br>
            `$bpk-button-link-on-dark-active-color` </br>
            `$bpk-button-link-on-dark-hover-color` </br>
            `$bpk-button-link-on-dark-disabled-color` </br>

- bpk-mixins: 28.1.1 => 28.2.0
    - Added new mixins for the new `BpkButtonSecondaryOnDark` and `BpkButtonLinkonDark` buttons: `bpk-button--secondary-on-dark`, `bpk-button--link-on-dark`

**Fixed:**
- bpk-mixins: 28.1.1 => 28.2.0
    - Remove underline from `BpkButtonLink` in hover and active state in `bpk-button--link`

# 2022-04-08

**Added:**

- @skyscanner/bpk-foundations-commons: 2.2.1 => 2.3.0
  - Label 3 style

- @skyscanner/bpk-foundations-ios: 2.2.1 => 2.3.0
  - Label 3 style

- @skyscanner/bpk-foundations-android: 3.2.1 => 3.3.0
  - Label 3 style

# 2022-04-07

**Added:**

- @skyscanner/bpk-foundations-web: 6.0.0 => 6.1.0
    - Added tokens for the new `BpkButtonPrimaryOnDark` and `BpkButtonPrimaryOnLight` buttons:
        - Background colour: </br>
            `$bpk-button-{button-type}-background-color` </br>
            `$bpk-button-{button-type}-{button-state}-background-color` </br>
            where *button-type* is one of `primary-on-dark`, `primary-on-light` and *button-state* is one of `active`, `disabled`, `hover`
        - Background image: </br>
            `$bpk-button-{button-type}-background-image` </br>
            `$bpk-button-{button-type}-{button-state}-background-image` </br>
            where *button-type* is one of `primary-on-dark`, `primary-on-light` and *button-state* is one of `active`, `disabled`, `hover`
        - Text colour: </br>
            `$bpk-button-{button-type}-color` </br>
            `$bpk-button-{button-type}-{button-state}-color` </br>
            where *button-type* is one of `primary-on-dark`, `primary-on-light` and *button-state* is one of `active`, `disabled`, `hover`

- bpk-mixins: 28.0.0 => 28.1.0
    - Added new mixins for the new `BpkButtonPrimaryOnDark` and `BpkButtonPrimaryOnLight` buttons: `bpk-button--primary-on-dark`, `bpk-button--primary-on-light`


**Changed:**

- @skyscanner/bpk-foundations-web: 6.0.0 => 6.1.0
    - Deprecated all button border color tokens: </br>
    `$bpk-button-{button-type}-border-color` </br>
    `$bpk-button-{button-type}-hover-border-color` </br>
    `$bpk-button-{button-type}-active-border-color` </br>
    where *button-type* is one of `secondary`, `destructive`. Buttons should no longer have borders
    - Deprecated all outline button tokens: `$bpk-button-outline-*`. Use one of the equivalent `$bpk-button-primary-on-dark-*` or `$bpk-button-primary-on-light-*` tokens instead

- bpk-mixins: 28.0.0 => 28.1.0
    - Deprecated `bpk-button--outline` mixin. Use instead one of `bpk-button--primary-on-dark`, `bpk-button--primary-on-light` mixins instead

# 2022-03-30

**Fixed:**

- bpk-mixins: 27.0.0 => 28.0.0
    - Fixed padding in icon-only buttons
    - Restored vertical padding as it was causing the text inside anchor buttons to be misaligned due to the minimum height property which was previously added


**Breaking:**
- bpk-mixins: 27.0.0 => 28.0.0
    - Introduced vertical padding in `bpk-button--link` mixin. If applying this mixin to a button, it will increase in height so needs to be check it does not alter layout
    - `bpk-button--padded` mixin is deleted as link buttons come by default with padding

# 2022-03-25

**Breaking:**

- @skyscanner/bpk-foundations-web: 5.3.0 => 6.0.0
    - `$bpk-button-border-radius` changed to `.5rem`
    - `$bpk-button-large-line-height` and `buttonLargeLineHeight` which is used to align text and icons in buttons is changed to match the new `heading-4` style of large buttons
    - Some button background and text colour tokens are changed. See below under colour changes for more details.

- bpk-mixins: 26.1.1 => 27.0.0
    - `bpk-button`:
      - added minimum height `36px`. This may cause some buttons to appear larger in height.
      - changed button radius from `.375rem` to `.5rem`
      - removed borders and box shadows from all buttons
      - changed background colour in hover state
    - `bpk-button--secondary`:
      - changed background colour in default, hover, and pressed mode
      - changed text colour in default and hover state
    - `bpk-button--destructive`:
      - changed background colour and text colour in default, hover, pressed mode
    - `bpk-button--large`:
      - added minimum height `48px`. This may cause some buttons to appear larger in height.
      - changed radius from `.375rem` to `.5rem`
      - L/R padding for large buttons was changed from `24px` to `16px`. This will cause large buttons to appear smaller in width.
      - changed large buttons style to `heading-4`. This will cause the text to appear smaller.
    - `bpk-button--icon-only`:
      - changed radius of icon-only buttons from `50%` to `.5rem`. This changes the shape of icon-only buttons from round to more square-shaped.

**Changed:**
- @skyscanner/bpk-foundations-web: 5.3.0 => 6.0.0
    - deprecated all button `box-shadow` tokens

# 2022-02-28

**Changed:**

- @skyscanner/bpk-foundations-web: 5.2.0 => 5.3.0
    - The following Sass tokens are deprecated:
        - `$bpk-text-{size}-font-size`, `$bpk-text-{size}-font-weight`, `$bpk-text-{size}-line-height`, `$bpk-text-{size}-letter-spacing`, where *size* is one of: `xs`, `sm`, `base`, `lg`, `xl`, `xxl`, `xxxl`, `xxxxl`, `xxxxxl`.
        - `$bpk-h-{size}-font-size`, `$bpk-h-{size}-font-weight`, `$bpk-h-{size}-line-height`, where *size* is one of: `1`, `2`, `3`, `4`, `5`, `6`.
        
        To migrate, use the BpkText component or a backpack mixin instead. See below for an example.
    
        ```scss
        /* Old */
        .my-class {
            font-size: $bpk-text-xs-font-size;
            line-height: $bpk-text-xs-line-height;
            font-weight:  $bpk-text-xs-font-weight;
            letter-spacing: $bpk-text-xs-letter-spacing;
        }

        /* New */
        .my-class {
            @include bpk-caption;
        }
        ```

    - The following JS tokens are deprecated:
        - `text{size}FontSize`, `text{size}FontWeight`, `text{size}LineHeight`, `text{size}LetterSpacing`, where *size* is one of: `Xs`, `Sm`, `Base`, `Lg`, `Xl`, `Xxl`, `Xxxl`, `Xxxxl`, `Xxxxxl`.
        - `h{size}FontSize`, `h{size}FontWeight`, `h{size}LineHeight`, where *size* is one of: `1`, `2`, `3`, `4`, `5`, `6`.

        To migrate, use one of the equivalent tokens as follows:
        - `text{size}FontSize` => `fontSize{size}`
        - `text{size}LineHeight` => `lineHeight{size}`
        - `text{size}FontWeight` => `fontWeightBook`
        
        where *size* is one of: `Xs`, `Sm`, `Base`, `Lg`, `Xl`, `Xxl`, `Xxxl`, `Xxxxl`, `Xxxxxl`.

# 2022-02-18

**Added:**

@skyscanner/bpk-foundations-web: 5.1.1 => 5.2.0
  - Added two new spacing sizes:
    - `bpk-spacing-xxxl()`
    - `bpk-spacing-xxxxl()`

# 2022-02-07

**Fixed:**

- @skyscanner/bpk-foundations-common: 2.2.0 => 2.2.1
  - Add deprecation flag to old typography style tokens for apps

- @skyscanner/bpk-foundations-ios: 2.2.0 => 2.2.1
  - Add deprecation flag to old typography style tokens

- @skyscanner/bpk-foundations-android: 3.2.0 => 3.2.1
  - Add deprecation flag to old typography style tokens


# 2022-01-28

**Added:**
- @skyscanner/bpk-foundations-commons: 2.1.0 => 2.2.0
  - Added new style tokens
  - Updated line heights

- @skyscanner/bpk-foundations-ios: 2.1.0 => 2.2.0
  - Added new style tokens
  - Updated line heights

- @skyscanner/bpk-foundations-android: 3.1.1 => 3.2.0
  - Added new style tokens
  - Updated line heights

**Fixed:**
- @skyscanner/bpk-foundations-android: 3.1.1 => 3.2.0
  - Remove unused xml token file to avoid confusion

# 2022-01-27

**Fixed:**
- @skyscanner/bpk-foundations-android: 3.1.0 => 3.1.1
  - Included originalTag where needed in xml version for tokens

# 2022-01-27

**Added:**
- @skyscanner/bpk-foundations-android: 3.0.0 => 3.1.0
  - Added missing raw tokens for text size, line height and letter spacing
- @skyscanner/bpk-foundations-ios: 2.0.0 => 2.1.0
    - Added missing raw tokens for text size, line height and letter spacing
- @skyscanner/bpk-foundations-common: 2.0.0 => 2.1.0
  - Added missing raw tokens for text size, line height and letter spacing


# 2022-01-26

**Breaking:**

- @skyscanner/bpk-foundations-web: 4.4.0 => 5.0.0
  - Updated `font-size` tokens to use the new typography sizes.
    - `font-size-xxl`, `h-2-font-size`, `text-xxl-font-size` has changed from `1.875rem` to `2rem`.
    - `font-size-xxxl`, `text-xxxl-font-size` has changed from `2.25rem` to `2.5rem`.
    - `font-size-xxxxl`, `h-1-font-size`, `text-xxxxl-font-size` has changed from `2.625rem` to `3rem`.
    - `font-size-xxxxxl`, `text-xxxxxl-font-size` has changed from `3.75rem` to `4rem`.
  - Updated `line-height` tokens to use the new typography sizes.
    - `line-height-sm`, `text-sm-line-height` has changed from `1.125rem` to `1.25rem`.
    - `line-height-base`, `h-4-line-height`, `text-base-line-height` has changed from `1.25rem` to `1.5rem`.
    - `line-height-lg`, `text-lg-line-height` has changed from `1.625rem` to `1.75rem`.
    - `line-height-xl`, `h-3-line-height`, `text-xl-line-height` has changed from `1.9375rem` to `2rem`.
    - `line-height-xxl`, `h-2-line-height`, `text-xxl-line-height` has changed from `2.4375rem` to `2.5rem`.
    - `line-height-xxxl`, `h-1-line-height`, ``text-xxxl-line-height`` has changed from `2.9375rem` to `3rem`.
    - `line-height-xxxxl`, `text-xxxxl-line-height` has changed from `3.4375rem` to `3.5rem`.
    - `line-height-xxxxxl`, `text-xxxxxl-line-height` has changed from `4.875rem` to `4.5rem`.  
# 2022-01-20

**Added:**

- bpk-foundations-web: 4.3.3 => 4.4.0
  - added weight, line height, and letter spacing tokens that will be used to support the new typography system

# 2022-01-18

**Breaking:**

- @skyscanner/bpk-foundations-common:
  - Font Sizes, weights and Line Heights have been updated to use the correct values

- @skyscanner/bpk-foundations-ios:
  - Font Sizes, weights and Line Heights have been updated to use the correct values

- @skyscanner/bpk-foundations-android:
  - Font Sizes, weights and Line Heights have been updated to use the correct values

**Changed:**

- @skyscanner/bpk-foundations-common:
  - Typography related aliases

# 2021-12-17

**Patch:**

- bpk-foundations-web:
  - Exporting `spacing-v2` tokens for use in the docsite.

# 2021-12-10

**Patched:**

- @skyscanner/bpk-foundations-web: 4.3.0 => 4.3.1
  - Updated `CALENDAR_DAY_SPACING` to `8px` to align with updated calendar sizes.

# 2021-12-08

**Changed:**

- @skyscanner/bpk-foundations-web: 4.2.0 => 4.3.0
  - Changed `bpk-input-padding-x` token from `1rem` to `0.5rem`.

# 2021-12-02

**Changed:**

- @skyscanner/bpk-foundations-web: 4.1.1 => 4.2.0
  - Changed `bpk-calendar-day-spacing` token to use the new spacing grid.
  - Changed `bpk-calendar-day-color` token colour.

# 2021-11-30

**Fixed:**

- @skyscanner/bpk-foundations-android: 2.0.0 => 2.0.1
  - Updated `TEXT_SECONDARY_DARK_COLOR` to `SKY_GRAY_TINT_04`

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
