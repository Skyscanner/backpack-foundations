**Breaking:**

  - `bpk-mixins`:
    - Removed content container mixins. If you need to add margins/padding to the bottom of your text please use the Backpack spacing directly.
      - `@mixin bpk-content-container`
      - `@mixin bpk-content-container--bare-html`
      - `@mixin bpk-content-container--bare-html-alternate`

**Patch:**

  - `@skyscanner/bpk-foundations-web`:
    - Fix `calendarDaySize` token value to work with the existing bpk calendar utils