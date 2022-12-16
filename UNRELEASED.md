**Patch:**
- `@skyscanner/bpk-foundations-web`:
    - Deprecate the following tokens as they are not widely used:
        - scrim tokens `$bpk-scrim-opacity`, `$bpk-scrim-initial-opacity`, `$bpk-scrim-dark-opacity`, `$bpk-scrim-mobile-opacity`
        - `$bpk-panel-padding` and `$bpk-panel-background-color`
        - `$bpk-card-color`

**Changed:**
- `bpk-mixins`:
    - `bpk-panel--padded` - change padding to `16px` to be consistent with card padding