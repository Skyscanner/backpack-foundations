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
