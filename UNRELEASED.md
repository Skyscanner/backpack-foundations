**Changed:**
  - `@skyscanner/bpk-foundations-web`:
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

  - `bpk-mixins`:
    - Deprecated grid mixins as these are no longer supported due to the `BpkGrid` component being deprecated for a number of years.
    
**Patched:**
  - `@skyscanner/bpk-foundations-web`:
    - Change source of `animation` tokens to pull from `bpk-foundation-common`. Values are not changing so nothing for consumers to change.