# 2023-08-28

**Changed:**

- `bpk-svgs`: 18.0.0 => 18.1.0
  - Updated `explore` icon to new design.

# 2023-08-11

**Breaking:**

`bpk-svgs`: 17.1.0 => 18.0.0
- All JS icons and spinners have a `viewBox` attribute and no longer have `width` and `height` attributes. This should not have any visual impact, but might break snapshots.

# 2023-08-07

**Added:**

`@skyscanner/bpk-foundations-web`: 16.1.0 => 17.0.0 </br>
`@skyscanner/bpk-foundations-ios`: 6.1.0 => 6.2.0 </br>
`@skyscanner/bpk-foundations-android`: 7.1.0 => 7.2.0 </br>
- Add new private colour for map markers.

**Breaking:**

- `@skyscanner/bpk-foundations-web`: 16.1.0 => 17.0.0
  - Remove `spacing v2` and `spacing` tokens.
  - Remove `bpk-heading-content-margin-top` token. 
  - Spacing functions now only return the newer spacing values.

- `bpk-mixins`: 41.2.1 => 42.0.0
  - Remove `bpk-content-heading` as this is not used.

# 2023-08-03

**Breaking:**
`@skyscanner/bpk-svgs`: 16.4.0 => 17.0.0
- All JS icons have `aria-hidden` attribute set to true by default to hide icons from Assistive Technologies. You can overwrite the value if needed by passing `aria-hidden="false"` to the icon component.

# 2023-07-25

**Changed:**
`bpk-mixins`: 41.1.1 => 41.2.0
- Specified a wider support range for `node-sass` library.

# 2023-07-18

`@skyscanner/bpk-svgs`: 16.3.4 => 16.4.0
- Add new AI icon

# 2023-06-21

**Added:**

`@skyscanner/bpk-foundations-web: 16.0.0 => 16.1.0`: </br>
`bpk-mixins: 41.0.0 => 41.1.0`: </br>
- Add desktop and above desktop breakpoints


# 2023-06-05

**Breaking:**

Removing deprecated border tokens and mixins.

`@skyscanner/bpk-foundations-web: 15.3.0 => 16.0.0`:
  - Removed `border-radius-pill` and `border-radius-pill-lg` tokens. Use `bpk-border-radius-md` instead. Otherwise, check with your designer to choose any other supported radius.

`bpk-mixins: 40.3.1 => 41.0.0`:
  - Removed `bpk-border-radius-pill` mixin. `Use bpk-border-radius-lg` as the replacement.
  - Removed deprecated badge mixins
    - Removed `bpk-badge--light` mixin, please use `bpk-badge--normal`.
    - Removed `bpk-badge--destructive` mixin, please use `bpk-badge--critical`.

# 2023-04-24

**Added:**

`@skyscanner/bpk-foundations-web: 15.2.0 => 15.3.0`: </br>
`@skyscanner/bpk-foundations-ios: 6.0.0 => 6.1.0`: </br>
`@skyscanner/bpk-foundations-android: 7.0.0 => 7.1.0`: </br>
`bpk-mixins: 40.2.1 => 40.3.0`: </br>
- Add new semantic token for surface subtle

# 2023-03-20

**Changed:**

`@skyscanner/bpk-svgs:` 16.2.4 => 16.3.0
  - Change `baggage-cabin-add`, `baggage-cabin-not-included`, `bpk-cabin`, `baggage-checked-add`, `baggage-checked-not-included`, `bpk-checked`, `baggage-generic` icons

# 2023-03-16

**Added:**

`@skyscanner/bpk-foundations-web`: 15.1.0 => 15.2.0 </br>
`bpk-mixins`: 40.1.0 => 40.2.0 </br>
- Added private token for slider

# 2023-03-01

**Fixed:**

`bpk-mixins`: 40.0.0 => 40.1.0 </br>
- Fix `bpk-icon-lg--align-to-large-button` and `bpk-spinner--align-to-large-button` mixins to use correct token
- Fix `bpk-form-validation__container` to use correct token

**Added:**

`@skyscanner/bpk-foundations-web`: 15.0.0 => 15.1.0 </br>
`bpk-mixins`: 40.0.0 => 40.1.0 </br>
- Added private token for button line height

# 2023-02-28

**Breaking:**

`@skyscanner/bpk-foundations-web`: 14.0.1 => 15.0.0 </br>
`bpk-mixins`: 39.1.2 => 40.0.0 </br>
- The following tokens have been removed. You should use the corresponding semantic tokens instead.
    - `bpk-autosuggest-*`
    - `bpk-badge-*`
    - `bpk-grid-*`. This component is no longer supported.
    - `bpk-rating-*`
    - `bpk-state-selected-background-color`
    - `bpk-required-color`
    - `bpk-spacing-xs()`. This size is no longer supported in our spacing system.
    - **Dialogs**
        - `bpk-card-color`, `bpk-modal-header-padding`, `bpk-panel-padding`, `bpk-panel-background-color`, as well as all `bpk-scrim-*` tokens.
    - **Calendar**
        - `bpk-calendar-*-color`, `bpk-calendar-nav-*`, `bpk-calendar-padding`
    - **Horizontal Nav**
        - `bpk-horizontal-nav-link-color`, `bpk-horizontal-nav-link-hover-color`, `bpk-horizontal-nav-link-active-color`, `bpk-horizontal-nav-link-selected-color`
    - **Banner Alert**
        - `bpk-banner-alert-background-color`, `bpk-banner-alert-expand-icon-fill`, `bpk-banner-alert-children-padding-x`, `bpk-banner-alert-children-padding-y`, `bpk-banner-alert-children-color`
    - **Button**
        - `bpk-button-selected-*`, `bpk-button-text-align`, `bpk-button-font-size`, `bpk-button-font-weight`, `bpk-button-line-height`, `bpk-button-large-font-size`, `bpk-button-large-line-height`, `bpk-button-*-color`, `bpk-button-*-background-color`, `bpk-button-*-background-image`, `bpk-button-*-box-shadow`, `bpk-button-padding-*`, `bpk-button-large-padding-*`, `bpk-button-*-opacity`, `bpk-button-icon-*`
    - **Form**
        - `bpk-checkbox-checked-tick-color`, `bpk-radio-checked-circle-color`, `bpk-input-color`, `bpk-input-placeholder-color`, `bpk-select-border`, `bpk-select-color`, `bpk-select-disabled-color`, `bpk-label-color`, `bpk-label-font-size`, `bpk-label-line-height`
    - **Typography**
        - `bpk-text-{size}-font-size`, `bpk-text-{size}-font-weight`, `bpk-text-{size}-line-height`, `bpk-text-{size}-letter-spacing`, where *size* is one of: `xs`, `sm`, `base`, `lg`, `xl`, `xxl`, `xxxl`, `xxxxl`, `xxxxxl`
        - `bpk-h-{size}-font-size`, `bpk-h-{size}-font-weight`, `bpk-h-{size}-line-height`, where *size* is one of: `1`, `2`, `3`, `4`, `5`, `6`
        - `bpk-p-*`, `bpk-list-*`, `bpk-link-*`
        
        **Important:** You should not use typography tokens directly. Instead, use one of the supported mixins: `hero-1`, `hero-2`, `hero-3`, `hero-4`, `hero-5`, `heading-1`, `heading-2`, `heading-3`, `heading-4`, `heading-5`, `subheading`, `body-longform`, `body-default`, `footnote`, `caption`, `label-1`, `label-2`, `label-3`

</br> `bpk-mixins`: 39.1.2 => 40.0.0 </br>
- The following mixins have been removed:
    - `bpk-button--outline`, `bpk-button--selected`
    - `bpk-heading-6`, `bpk-heading--no-bottom-margin`
    - `bpk-grid__*`
    - `bpk-icon-sm` and `bpk-icon-lg`


</br> `@skyscanner/bpk-foundations-web`: 14.0.1 => 15.0.0 </br>
- The following files have been removed.
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.common`
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.default.scss`
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.es6`
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.scss`
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.raw`

If you are importing tokens from any of the above mentioned files, please replace the import path as such:
`@skyscanner/bpk-foundations-web/tokens/`**`breakpoints`**`.extension` -> `@skyscanner/bpk-foundations-web/tokens/`**`base`**`.extension`

# 2023-02-23

**Fixed:**

- `@skyscanner/bpk-foundations-web`: 14.0.0 => 14.0.1
    - Fix `breakpointDesktopMargin`, `selectLargeHeight`, `textareaMinHeight`, `ratingBaseWidth`, `ratingBaseHeight`, `ratingSmWidth`, `ratingSmHeight`, `ratingLgWidth`, `ratingLgHeight` JS tokens

# 2023-02-16

**Fixed:**

- `bpk-mixins: 39.1.0 => 39.1.1`:
  - Fixed an issue where correct cursor states were not showing for clickable and disabled chips.

# 2023-02-10

**Changed:**

`bpk-mixins`: 39.0.1 => 39.1.0
  - Update placeholder color in `input` and `textarea` from `text-disabled` to `text-secondary`.
# 2023-02-07

**Added:**

`@skyscanner/bpk-svgs: 16.1.1 => 16.2.0`
  - Added new `Origin` icon.

# 2023-02-01

**Breaking:**

- `@skyscanner/bpk-foundations-android`: 6.0.0 => 7.0.0
- `@skyscanner/bpk-foundations-common`: 5.0.0 => 6.0.0
- `@skyscanner/bpk-foundations-ios`: 5.0.0 => 6.0.0
- `@skyscanner/bpk-foundations-react-native`: 3.1.5 => 4.0.0
- `@skyscanner/bpk-foundations-web:` 13.6.0 => 14.0.0
- `bpk-mixins`: 38.0.0 => 39.0.0
- `bpk-stylesheets`: 8.1.25 => 9.0.0
- `@skyscanner/bpk-svgs`: 16.1.0 => 16.1.1
  - Removed no longer required private chip Tokens - these should not be used outside of foundations, so should not affect anybody outside of Backpack
  - Introduced new private chip tokens based on latest designs


# 2023-01-30

**Breaking:**

`bpk-mixins`: 37.2.1 => 38.0.0
  - Deprecated `bpk-badge--light` mixin and replaced with exact colour replacement `bpk-badge--normal`.
  - Created new `bpk-badge--warning` mixin for use when creating warning badges.
  - Removed `warning` from being the default badge type.
  - Deprecated `bpk-badge--destructive` mixin and replaced with exact colour replacement `bpk-badge--critical`.

# 2023-01-13

**Added:**

`@skyscanner/bpk-svgs`: 16.0.8 => 16.1.0
- Added automirror to `depart` and `return` icons for use on Android with RTL.`

# 2023-01-09

**Breaking:**

`@skyscanner/bpk-foundations-android`: 5.1.4 => 6.0.0
`@skyscanner/bpk-foundations-ios`: 4.1.4 => 5.0.0
- Renamed `BORDER_RADIUS_PILL` to `BORDER_RADIUS_XL`

**Changed**

`@skyscanner/bpk-foundations-web`: 13.5.0 => 13.6.0
`bpk-mixins`: 37.1.2 => 37.2.0
- Deprecate `bpk-border-radius-pill` token. Use `bpk-border-radius-md` instead. Otherwise, check with your designer to choose any other supported radius.
- Deprecate `bpk-border-radius-pill-lg` token. Use `bpk-border-radius-lg` instead.
- Add new `bpk-border-radius-lg`, `bpk-border-radius-xl` tokens
- Update `bpk-border-radius-sm` from `6px` to `8px`

`bpk-mixins`:
- Deprecate `bpk-border-radius-pill` mixin. Use `bpk-border-radius-md` instead. Otherwise, check with your designer to choose any other supported radius.
- Add new `bpk-border-radius-lg` and `bpk-border-radius-xl` mixins

# 2022-12-22

**Changed:**

- `@skyscanner/bpk-foundations-web`: 13.4.0 => 13.5.0
    - Deprecate the following tokens as they are not widely used:
        - `$bpk-button-text-align`
        - Backpack button selected tokens `$bpk-button-selected-color`, `$bpk-button-selected-hover-color`, `$bpk-button-selected-active-color`, `$bpk-button-selected-background-color`, `$bpk-button-selected-hover-background-color`, `$bpk-button-selected-active-background-color`, `$bpk-button-selected-background-image`, `$bpk-button-selected-hover-background-image`, `$bpk-button-selected-active-background-image`

# 2022-12-21

**Changed:**
- `@skyscanner/bpk-foundations-web`: 13.3.0 => 13.4.0
    - Deprecate the following tokens as they are not widely used:
        - autosuggest tokens `$bpk-autosuggest-list-background-color`, `$bpk-autosuggest-list-item-active-background-color`, `$bpk-autosuggest-list-item-highlighted-background-color`
        - badge tokens `$bpk-badge-padding-x`, `$bpk-badge-padding-y`,`$bpk-badge-background-color`, `$bpk-badge-centered-vertical-align`
        - horizontal nav tokens `$bpk-horizontal-nav-link-color`, `$bpk-horizontal-nav-link-hover-color`, `$bpk-horizontal-nav-link-active-color`, `$bpk-horizontal-nav-link-selected-color`
        - banner alert tokens `$bpk-banner-alert-background-color`, `$bpk-banner-alert-expand-icon-fill`, `$bpk-banner-alert-children-padding-x`, `$bpk-banner-alert-children-padding-y`, `$bpk-banner-alert-children-color`

# 2022-12-19

**Changed:**
- `@skyscanner/bpk-foundations-web`: 13.2.1 => 13.3.0
    - Deprecate the following tokens as they are not widely used:
        - scrim tokens `$bpk-scrim-opacity`, `$bpk-scrim-initial-opacity`, `$bpk-scrim-dark-opacity`, `$bpk-scrim-mobile-opacity`
        - `$bpk-panel-padding` and `$bpk-panel-background-color`
        - `$bpk-card-color`

- `bpk-mixins`: 37.0.0 => 37.1.0
    - `bpk-panel--padded` - change padding to `16px` to be consistent with card padding

# 2022-12-15

**Breaking:**

  - `bpk-mixins`: 36.2.0 => 37.0.0
    - Removed content container mixins. If you need to add margins/padding to the bottom of your text please use the Backpack spacing directly.
      - `@mixin bpk-content-container`
      - `@mixin bpk-content-container--bare-html`
      - `@mixin bpk-content-container--bare-html-alternate`

**Patch:**

  - `@skyscanner/bpk-foundations-web`: 13.2.0 => 13.2.1
    - Fix `calendarDaySize` token value to work with the existing bpk calendar utils

# 2022-12-15

**Changed:**
  - `@skyscanner/bpk-foundations-web`: 13.1.1 => 13.2.0
    - Deprecated calendar tokens as their usage is low and not widely used and using semantic tokens is preferred. The following are deprecated:
      - `$bpk-calendar-padding`
      - `$bpk-calendar-day-color`
      - `$bpk-calendar-day-selected-color`
      - `$bpk-calendar-day-focused-color`
      - `$bpk-calendar-day-focused-border-color`
      - `$bpk-calendar-day-hover-color`
      - `$bpk-calendar-day-hover-background-color`
      - `$bpk-calendar-day-active-color`
      - `$bpk-calendar-day-active-background-color`
      - `$bpk-calendar-day-disabled-color`
      - `$bpk-calendar-day-outside-color`
      - `$bpk-calendar-nav-icon-fill`
      - `$bpk-calendar-nav-icon-hover-fill`
      - `$bpk-calendar-nav-icon-active-fill`
      - `$bpk-calendar-nav-icon-disabled-fill`

    - Deprecated grid tokens as no longer supported.
      - `$bpk-grid-columns`
      - `$bpk-grid-gutter`
      - `$bpk-grid-container-padding`
      - `$bpk-grid-container-mobile-padding`

  - `bpk-mixins`: 36.1.3 => 36.2.0
    - Deprecated grid mixins as these are no longer supported due to the `BpkGrid` component being deprecated for a number of years.

**Patched:**
  - `@skyscanner/bpk-foundations-web`: 13.1.1 => 13.2.0
    - Change source of `animation` tokens to pull from `bpk-foundation-common`. Values are not changing so nothing for consumers to change.

# 2022-12-08

**Fixed:**
  - bpk-mixins: 36.1.2 => 36.1.3
    - Fix `bpk-label` mixin using incorrect line height token

**Changed:**
  - bpk-foundations-web: 13.0.0 => 13.1.0
    - Deprecated form tokens as their usage is low and not widely used and using semantic tokens is preferred. The following are deprecated:
      - `$bpk-checkbox-checked-tick-color`
      - `$bpk-radio-checked-circle-color`
      - `$bpk-input-color`
      - `$bpk-input-placeholder-color`
      - `$bpk-select-border`
      - `$bpk-select-color`
      - `$bpk-select-disabled-color`
      - `$bpk-label-color`
      - `$bpk-label-font-size`
      - `$bpk-label-line-height`
      - `$bpk-required-color`
      - `$bpk-heading-margin-top`
      - `$bpk-heading-margin-bottom`
      - `$bpk-p-margin-top`
      - `$bpk-p-margin-bottom`
      - `$bpk-list-margin-top`
      - `$bpk-list-margin-bottom`
      - `$bpk-list-nested-margin-top`
      - `$bpk-list-nested-margin-bottom`
      - `$bpk-list-item-margin-top`
      - `$bpk-list-item-margin-bottom`
      - `$bpk-link-hover-text-decoration`
      - `$bpk-link-*-color`

# 2022-11-14

**Breaking:**

`@skyscanner/bpk-foundations-web`: 12.1.4 => 13.0.0
`@skyscanner/bpk-svgs`: 15.2.1 => 16.0.0
  - Change small icons size from 18px to 16px aligning web icons with apps.

# 2022-11-14

**Added:**
  - bpk-mixins: 36.0.4 => 36.1.0
    - Added new `brand` style for badges.
# 2022-11-07

**Fixed:**

- bpk-mixins: 36.0.2 => 36.0.4
		- Further reverting of recent stylelint changes as some new rules are suggesting things we don't currently support.
    - Fix incorrect import of `_bonds.scss`

# 2022-11-03

**Fixed:**

- @skyscanner/bpk-svgs: 15.2.0 => 15.2.1
    - Bump `gulp-svgmin` to latest version to fix broken icons

# 2022-10-26

**Breaking:**

- bpk-mixins: 35.0.2 => 36.0.0
  - Delete Chip's styles: `primary`, `success`, `light`

**Added:**

- bpk-mixins: 35.0.2 => 36.0.0
  - Added Chip's styles: `default`, `onDark`, `onImage`

# 2022-10-26

**Fixed**

`@skyscanner/bpk-foundations-android: 5.1.1 => 5.1.2`
`@skyscanner/bpk-foundations-common: 4.1.1 => 4.1.2`
`@skyscanner/bpk-foundations-ios: 4.1.1 => 4.1.2`
`@skyscanner/bpk-foundations-react-native: 3.1.1 => 3.1.2`
`@skyscanner/bpk-foundations-web: 12.1.1 => 12.1.2`
  - Change mapping for textOnLight + textPrimaryInverse to NightGrey10 in night mode

# 2022-10-25

**Fixed**

`@skyscanner/bpk-foundations-android:  5.1.0 => 5.1.1`
`@skyscanner/bpk-foundations-common: 4.1.0 => 4.1.1`
`@skyscanner/bpk-foundations-ios: 4.1.0 => 4.1.1`
`@skyscanner/bpk-foundations-react-native: 3.1.0 => 3.1.1`
`@skyscanner/bpk-foundations-web: 12.1.0 => 12.1.1`
  - Change mapping for surfaceContrast to NightGrey10 in night mode

# 2022-10-21

**Breaking:**

- bpk-mixins: 34.0.5 => 35.0.0
  - Switched `Button` mixins to use `label-1`

**Changed**

`@skyscanner/bpk-foundations-web: 12.0.3 => 12.1.0`
- Deprecated the following: `BUTTON_FONT_SIZE`, `BUTTON_FONT_WEIGHT`, `BUTTON_LINE_HEIGHT`, `BUTTON_LARGE_FONT_SIZE`, `BUTTON_LARGE_LINE_HEIGHT`

**Added:**

`@skyscanner/bpk-foundations-android: 5.0.2 => 5.1.0` </br>
`@skyscanner/bpk-foundations-common: 4.0.2 => 4.1.0` </br>
`@skyscanner/bpk-foundations-ios: 4.0.2 => 4.1.0` </br>
`@skyscanner/bpk-foundations-react-native: 3.0.2 => 3.1.0` </br>
`@skyscanner/bpk-foundations-web: 12.0.3 => 12.1.0` </br>
- Added new `TEXT_DISABLED_ON_DARK_DAY` and `TEXT_DISABLED_ON_DARK_NIGHT` tokens

# 2022-10-18

**Fixed**

`@skyscanner/bpk-foundations-android: 5.0.1 => 5.0.2`
`@skyscanner/bpk-foundations-common: 4.0.1 => 4.0.2`
`@skyscanner/bpk-foundations-ios: 4.0.1 => 4.0.2`
`@skyscanner/bpk-foundations-react-native: 3.0.1 => 3.0.2`
`@skyscanner/bpk-foundations-web: 12.0.2 => 12.0.3`
  - Change mapping for canvasContrast to NightGrey10 in night mode

# 2022-10-17

**Added:**
- @skyscanner/bpk-svgs: 15.0.2 => 15.1.0
  - New small and large Baggage icons, these should be used in favour of previous baggage icons, which are now considered deprecated.
    - `baggage-cabin-add`, `baggage-cabin-not-included`, `baggage-cabin`, `baggage-checked-add`, `baggage-checked-not-included`, `baggage-checked`, `baggage-generic`

**Changed:**

- bpk-mixins: 34.0.1 => 34.0.2
  - Updated `bpk-code` mixins to use new colours.

**Fixed:**

- @skyscanner/bpk-foundations-web: 12.0.0 => 12.0.2
  - Fixed incorrect colour for base font.
  - Deprecated previously missed `scrim` colours.
  - Deprecate unknown state token.


# 2022-10-11

**Fixed:**

- bpk-mixins: 34.0.0 => 34.0.1
    - Fix colour in disabled Button mixins

# 2022-10-07

**Changed:**

- bpk-foundations-web: 11.0.1 => 12.0.0
    - Deprecated all colour Button tokens `$bpk-button-*-color`, `$bpk-button-*-background-color`, `$bpk-button-*-background-image`

**Breaking:**

- bpk-mixins: 33.0.1 => 34.0.0
    - Update Button mixins to use new semantic tokens

# 2022-10-07

**Changed:**

- `@skyscanner/bpk-foundations-common: 4.0.0 => 4.0.1` <br />
- `@skyscanner/bpk-foundations-android: 5.0.0 => 5.0.1` <br />
- `@skyscanner/bpk-foundations-ios: 4.0.0 => 4.0.1` <br />
- `@skyscanner/bpk-foundations-react-native: 3.0.0 => 3.0.1` <br />
- `@skyscanner/bpk-foundations-web: 11.0.0 => 11.0.1` <br />
  - Change chip normal night background colour to Night Grey 25.

# 2022-10-05

**Breaking:**

- `@skyscanner/bpk-foundations-common: 3.2.1 => 4.0.0` <br />
- `@skyscanner/bpk-foundations-android: 4.4.1 => 5.0.0` <br />
- `@skyscanner/bpk-foundations-ios: 3.4.1 => 4.0.0` <br />
- `@skyscanner/bpk-foundations-react-native: 2.4.1 => 3.0.0` <br />
- `@skyscanner/bpk-foundations-web: 10.4.0 => 11.0.0` <br />
- `bpk-mixins: 32.2.0 => 33.0.0` <br />
- `bpk-stylesheets: 7.2.16 => 8.0.0` <br />
- `@skyscanner/bpk-svgs: 14.5.9 => 15.0.0` <br />
  - Switch to new brand colours


# 2022-09-29

**Changed:**

- bpk-foundations-web: 10.3.1 => 10.4.0
    - Update link tokens to semantic colours:
        - `$bpk-link-alternate-active-color`
        - `$bpk-link-active-color`
        - `$bpk-link-white-active-color`
        - `$bpk-link-hover-color`
- bpk-mixins: 32.1.0 => 32.2.0
    - Update `bpk-link`, `bpk-link--active`, `bpk-link--alternate`, `bpk-link--white` mixins to use semantic colours

# 2022-09-28

**Changed:**

- bpk-mixins: 32.0.4 => 32.1.0
    - Change colours to semantic tokens in `bpk-table` mixins
    - Change text style in `bpk-table__cell--head` mixin. This will change the weight of the text in the header cells of the table.

# 2022-09-27

**Changed:**

- `@skyscanner/bpk-foundations-common: 3.2.0 => 3.2.1` <br />
- `@skyscanner/bpk-foundations-android: 4.4.0 => 4.4.1` <br />
- `@skyscanner/bpk-foundations-ios: 3.4.0 => 3.4.1` <br />
- `@skyscanner/bpk-foundations-react-native 2.4.0 => 2.4.1:` <br />
- `@skyscanner/bpk-foundations-web: 10.3.0 => 10.3.1` <br />
  - Updated button destructive foreground colour


# 2022-09-27

**Added:**

- `@skyscanner/bpk-foundations-common: 3.1.3 => 3.2.0` <br />
- `@skyscanner/bpk-foundations-android: 4.3.0 => 4.4.0` <br />
- `@skyscanner/bpk-foundations-ios: 3.3.0 => 3.4.0` <br />
- `@skyscanner/bpk-foundations-react-native: 2.3.0 => 2.4.0` <br />
- `@skyscanner/bpk-foundations-web: 10.2.0 => 10.3.0` <br />
  - Added private tokens for skeleton shimmer colours
  - Updated private tokens for button colours


# 2022-09-23

**Changed:**

- bpk-foundations-web: 10.0.0 => 10.2.0
    - Update banner alert tokens to use semantic colour tokens
    - Deprecate `$bpk-banner-alert-event-color` token

**Added:**

- `@skyscanner/bpk-foundations-android:` 4.2.1 => 4.3.0 <br />
- `@skyscanner/bpk-foundations-ios:` 3.2.1 => 3.3.0 <br />
- `@skyscanner/bpk-foundations-react-native:` 2.2.1 => 2.3.0 <br />
- `@skyscanner/bpk-foundations-web:` 10.0.0 => 10.2.0 <br />
  - Added private tokens for button colours

# 2022-09-15

**Breaking:**

- bpk-foundations-web: 9.6.0 => 10.0.0
    - Update badge token `$bpk-badge-background-color` to use semantic colour tokens

- bpk-mixins: 31.7.0 => 32.0.0
    - Update Badge mixins to use new semantic tokens

# 2022-09-13

**Changed:**

- bpk-foundations-web: 9.5.1 => 9.6.0
    - Update select tokens `$bpk-select-border` and `$bpk-select-disabled-border-color` to use semantic colour tokens

- bpk-mixins: 31.6.8 => 31.7.0
    - Update select mixins `bpk-select`, `bpk-select--large`, `bpk-select--invalid` to use semantic colour tokens
    - Updated Radio and Checkbox mixins to use new semantic tokens.

# 2022-09-13

**Changed:**

- `@skyscanner/bpk-foundations-android: 4.2.0 => 4.2.1`<br />
- `@skyscanner/bpk-foundations-ios: 3.2.0 => 3.2.1`<br />
- `@skyscanner/bpk-foundations-react-native: 2.2.0 => 2.2.1`<br />
- `@skyscanner/bpk-foundations-web: 9.5.0 => 9.5.1`<br />
  - Changed private token for OnDarkOnBackground to match design

# 2022-09-12

**Changed:**

- bpk-foundations-web: 9.4.0 => 9.5.0
  - Changed background colour of autosuggest list item token `$bpk-autosuggest-list-item-active-background-color`

**Added:**

- `@skyscanner/bpk-foundations-android: 4.1.1 => 4.2.0`<br />
- `@skyscanner/bpk-foundations-ios: 3.1.1 => 3.2.0`<br />
- `@skyscanner/bpk-foundations-react-native: 2.1.1 => 2.2.0`<br />
- `@skyscanner/bpk-foundations-web: 9.4.0 => 9.5.0`<br />
  - Added private tokens for chip colours

# 2022-09-09

**Added:**

- @skyscanner/bpk-svgs: 14.4.4 => 14.5.0
  - New pre-coloured branded icons for use in Sass/CSS.

**Patched:**

- bpk-mixins: 31.6.5 => 31.6.6
  - Corrected to new `bpk-input--valid` icon.

# 2022-09-08

**Changed:**

- bpk-foundations-web: 9.3.0 => 9.4.0
  - Updated `$bpk-input-border`, `$bpk-input-color`, `$bpk-input-placeholder-color`, `$bpk-input-disabled-border-color`, `$bpk-input-disabled-color`, `$bpk-label-color`, `$bpk-label-disabled-color`, `$bpk-form-validation-color`, `$bpk-required-color` tokens to use new colour tokens to prepare for new colour rollout.

- bpk-mixins: 31.6.3 => 31.6.4
  - Changed `bpk-input` mixins to use semantic tokens
  - Changed `bpk-textarea` mixins to use semantic tokens

# 2022-08-31

**Changed:**

- @skyscanner/bpk-foundations-web: 9.2.1 => 9.3.0
  - Changed `$bpk-horizontal-nav-link-hover-color` and `$bpk-horizontal-nav-link-active-color` token values

# 2022-08-30

**Fixed:**

- `@skyscanner/bpk-foundations-android: 4.1.0 => 4.1.1`<br />
- `@skyscanner/bpk-foundations-ios: 3.1.0 => 3.1.1`<br />
- `@skyscanner/bpk-foundations-react-native: 2.1.0 => 2.1.1`<br />
- `@skyscanner/bpk-foundations-web: 9.2.0 => 9.2.1`<br />
  - Fixed an issue whereby tokens in the new colour system are marked `deprecated`. This is due to the tokens being sorted so when the old colours came after the new colours it would override the details in the combined semantic tokens.

# 2022-08-25

**Changed:**

- `@skyscanner/bpk-foundations-web 9.1.0 => 9.2.0`:
  - Changed calendar navigation icon colours:
    - `$bpk-calendar-nav-icon-active-fill`
    - `$bpk-calendar-nav-icon-disabled-fill`
    - `$bpk-calendar-nav-icon-fill`
    - `$bpk-calendar-nav-icon-hover-fill`
  - Changed calendar date colours:
    - `$bpk-calendar-day-active-background-color`
    - `$bpk-calendar-day-disabled-color`
    - `$bpk-calendar-day-hover-color`
    - `$bpk-calendar-day-selected-background-color`
  - Deprecated `$bpk-calendar-day-selected-background-color` token


# 2022-08-24

**Changed:**

`@skyscanner/bpk-foundations-android: 4.0.0 => 4.1.0`<br />
`@skyscanner/bpk-foundations-common: 3.0.0 => 3.1.0`<br />
`@skyscanner/bpk-foundations-ios: 3.0.0 => 3.1.0`<br />
`@skyscanner/bpk-foundations-react-native: 2.0.0 => 2.1.0`<br />
`@skyscanner/bpk-foundations-web: 9.0.0 => 9.1.0`<br />
`bpk-mixins: 31.5.0 => 31.6.0`<br />
`bpk-stylesheets: 7.1.45 => 7.2.0`<br />
`@skyscanner/bpk-svgs: 14.3.8 => 14.4.0`<br />
  - Deprecated all the old colour tokens from the old colour system in prepareation for the new colours. You will see warning in code mentioning these have been deprecated but further comms to swap to, to follow.

# 2022-08-23

**Breaking:**

`@skyscanner/bpk-foundations-common: 2.6.1 => 3.0.0`<br />
`@skyscanner/bpk-foundations-android: 3.7.1 => 4.0.0`<br />
`@skyscanner/bpk-foundations-ios: 2.7.1 => 3.0.0`<br />
`@skyscanner/bpk-foundations-react-native: 1.6.1 => 2.0.0`<br />
`@skyscanner/bpk-foundations-web: 8.5.1 => 9.0.0` <br />
  - Renamed `TEXT_PRIMARY_ON_CONTRAST_DAY` to `TEXT_PRIMARY_INVERSE_DAY`
  - Renamed `TEXT_PRIMARY_ON_CONTRAST_NIGHT` to `TEXT_PRIMARY_INVERSE_NIGHT`
  - Removed `TEXT_PRIMARY_ON_CONTRAST_DAY` and `TEXT_SECONDARY_ON_CONTRAST_NIGHT`
  - Added `TEXT_ON_LIGHT_DAY`, `TEXT_ON_LIGHT_NIGHT`, `TEXT_ON_DARK_DAY` and `TEXT_ON_DARK_NIGHT`
  - Removed base colour tokens from foundations to only expose semantic tokens for use by consumers.

# 2022-08-17

**Fixed:**

`@skyscanner/bpk-foundations-common: 2.6.0 => 2.6.1`<br />
`@skyscanner/bpk-foundations-android: 3.7.0 => 3.7.1`<br />
`@skyscanner/bpk-foundations-ios: 2.7.0 => 2.7.1`<br />
`@skyscanner/bpk-foundations-react-native: 1.6.0 => 1.6.1`<br />
`@skyscanner/bpk-foundations-web: 8.5.0 => 8.5.1` <br />
  - Map `NIGHT_GREY_20` to `##1D1B20`.
  - Map `NIGHT_GREY_25` to `#2C2C2E`.
  - Map `SURFACE_HIGHLIGHT_NIGHT` to `NIGHT_GREY_25`

# 2022-08-15

**Changed:**

- @skyscanner/bpk-foundations-web: 8.4.0 => 8.5.0
  - Changed `$bpk-panel-border-color` token value

- bpk-mixins: 31.3.0 => 31.4.0
  - Changed border colour in `bpk-panel` mixin

# 2022-08-11

**Changed:**

- @skyscanner/bpk-foundations-web: 8.3.0 => 8.4.0
  - Changed `$bpk-card-color` token value

- bpk-mixins: 31.2.0 => 31.3.0
  - Changed text colour in `bpk-card` mixin
  - Removed text colour property in `bpk-blockquote` mixin. Text colour will be inherited from the base stylesheet.
  - Removed background colour property in `bpk-blockquote` mixin.

**Added**

- bpk-mixins: 31.2.0 => 31.3.0
    - The `strong` badge theme has been added, which aligns to our APP implementations and better meets the needs of users.

# 2022-08-03

**Changed:**

`@skyscanner/bpk-foundations-android: 3.6.1 => 3.7.0`<br />
`@skyscanner/bpk-foundations-common: 2.5.1 => 2.6.0`<br />
`@skyscanner/bpk-foundations-ios: 2.6.1 => 2.7.0`<br />
`@skyscanner/bpk-foundations-react-native: 1.5.1 => 1.6.0`
 - @skyscanner/bpk-foundations-web: 8.2.1 => 8.3.0
  - Separated Marcomms colours to separate colour set with `Marcomms` appended to it, for strict guidence on when to be utilised.

`bpk-mixins: 31.1.6 => 31.2.0`
  - Updated Badge mixins to use `bpk-caption` to use the caption styles.

# 2022-7-28

**Fixed**

`@skyscanner/bpk-svgs: 14.3.2 => 14.3.3`
	- center-location icon was wrongfully added as centre-location

`@skyscanner/bpk-foundations-android: 3.6.0 => 3.6.1`<br />
`@skyscanner/bpk-foundations-common: 2.5.0 => 2.5.1`<br />
`@skyscanner/bpk-foundations-ios: 2.6.0 => 2.6.1`<br />
`@skyscanner/bpk-foundations-react-native: 1.5.0 => 1.5.1`<br />
`@skyscanner/bpk-foundations-web: 8.2.0 => 8.2.1`
  - Renamed `SCRIM` base colour to `BLACK_ALPHA_70` which causes clash with semantic `Scrim` token at generation.
# 2022-07-27

**Added:**

`@skyscanner/bpk-foundations-android: 3.5.1 => 3.6.0`<br />
`@skyscanner/bpk-foundations-common: 2.4.1 => 2.5.0`<br />
`@skyscanner/bpk-foundations-ios: 2.5.1 => 2.6.0`<br />
`@skyscanner/bpk-foundations-react-native: 1.4.1 => 1.5.0`<br />
`@skyscanner/bpk-foundations-web: 8.1.1 => 8.2.0`
  - Added new alpha colours and scrim colour
  - Updated `TEXT_DISABLED_DAY` & `TEXT_DISABLED_NIGHT` colours to correct colours
  - Added text on contrast colours.

# 2022-07-26

**Fixed:**

`@skyscanner/bpk-foundations-common: 2.4.0 => 2.4.1`<br />
`@skyscanner/bpk-foundations-android: 3.5.0 => 3.5.1`<br />
`@skyscanner/bpk-foundations-ios: 2.5.0 => 2.5.1`<br />
`@skyscanner/bpk-foundations-react-native: 1.4.0 => 1.4.1`<br />
`@skyscanner/bpk-foundations-web: 8.1.0 => 8.1.1`<br />
  - Exposed previously missing `NIGHT_GREY_25`.

**Added:**

  `@skyscanner/bpk-svgs: 14.2.0 => 14.3.0`
    - Updated account-circle icons 16px and 24px.
    - Updated menu icons 16px and 24px.
    - Updated search icons 16px and 24px.
    - Updated face-id icon 24px.
    - Updated fingerprint icon 24px.
    - Added centre-location icons 16px and 24px.
    - Added face-id icon 16px.
    - Added fingerprint icon 16px.

  `@skyscanner/bpk-foundations-android: 3.4.0 => 3.5.0`<br />
  `@skyscanner/bpk-foundations-ios: 2.4.0 => 2.5.0`<br />
  `@skyscanner/bpk-foundations-react-native: 1.3.0 => 1.4.0`
    - Added new dynamic colours for using in apps for Light and Dark mode
# 2022-07-25

**Added:**

`@skyscanner/bpk-foundations-common: 2.3.0 => 2.4.0`<br />
`@skyscanner/bpk-foundations-android: 3.3.0 => 3.4.0`<br />
`@skyscanner/bpk-foundations-ios: 2.3.0 => 2.4.0`<br />
`@skyscanner/bpk-foundations-react-native: 1.2.2 => 1.3.0`<br />
`@skyscanner/bpk-foundations-web: 8.0.0 => 8.1.0`
  - Added new colour tokens in preparation for new colour updates. Currently these map to their equivelant old tokens. Except for `Eco Green`, `Night Sky`, `Night Yellow Fill` and `Night Pink Fill`, as these are new colours and don't have an old palette mapping.
  - Added marcomms palette to colour set.

`bpk-mixins: 31.1.1 => 31.1.2`<br />
`bpk-stylesheets: 7.1.35 => 7.1.36`<br />
`@skyscanner/bpk-svgs: 14.1.9 => 14.2.0`<br />
  - Bumped `@skyscanner/bpk-foundations-web` dependency based on the above new version.
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
