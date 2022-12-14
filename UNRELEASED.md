**Breaking:**

  - `bpk-mixins`:
    - Removed content container mixins. If you need to add margins/padding to the bottom of your text please use the Backpack spacing directly.
      - `@mixin bpk-content-container`
      - `@mixin bpk-content-container--bare-html`
      - `@mixin bpk-content-container--bare-html-alternate`

**Changed:**
  - `@skyscanner/bpk-foundations-web`:
    - Deprecated grid tokens as no longer supported.
      - `$bpk-grid-columns`
      - `$bpk-grid-gutter`
      - `$bpk-grid-container-padding`
      - `$bpk-grid-container-mobile-padding`

  - `bpk-mixins`:
    - Deprecated grid mixins as these are no longer supported due to the `BpkGrid` component being deprecated for a number of years.
    
**Patched:**
  - `bpk-foundations-web`:
    - Change source of `animation` tokens to pull from `bpk-foundation-common`. Values are not changing so nothing for consumers to change.
