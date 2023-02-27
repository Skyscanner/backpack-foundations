**Breaking:**

`@skyscanner/bpk-foundations-web`: </br>
`bpk-mixins`: </br>
- The following tokens have been removed:
    - `bpk-card-color`, `bpk-modal-header-padding`, `bpk-panel-padding`, `bpk-panel-background-color`, as well as all `bpk-scrim-*` tokens.
    - `bpk-calendar-*-color`, `bpk-calendar-nav-*`, `bpk-calendar-padding`
    - `bpk-button-selected-*`, `bpk-button-text-align`, `bpk-button-font-size`, `bpk-button-font-weight`, `bpk-button-line-height`, `bpk-button-large-font-size`, `bpk-button-large-line-height`, `bpk-button-*-color`, `bpk-button-*-background-color`, `bpk-button-*-background-image`, `bpk-button-*-box-shadow`, `bpk-button-padding-*`, `bpk-button-large-padding-*`, `bpk-button-*-opacity`, `bpk-button-icon-*`
    - `bpk-grid-*`
    - `bpk-state-selected-background-color`
    - `bpk-checkbox-checked-tick-color`
    - `bpk-radio-checked-circle-color`
    - `bpk-input-color`, `bpk-input-placeholder-color`
    - `bpk-select-border`, `bpk-select-color`, `bpk-select-disabled-color`
    - `bpk-label-color`, `bpk-label-font-size`, `bpk-label-line-height`
    - `bpk-required-color`
    - `bpk-rating-*`
    - `bpk-button-font-size`, `bpk-p-*`, `bpk-list-*`, `bpk-link-*`
    - `bpk-text-{size}-font-size`, `bpk-text-{size}-font-weight`, `bpk-text-{size}-line-height`, `bpk-text-{size}-letter-spacing`, where *size* is one of: `xs`, `sm`, `base`, `lg`, `xl`, `xxl`, `xxxl`, `xxxxl`, `xxxxxl`
    - `bpk-h-{size}-font-size`, `bpk-h-{size}-font-weight`, `bpk-h-{size}-line-height`, where *size* is one of: `1`, `2`, `3`, `4`, `5`, `6`
    
**Important** </br>
You should not use typography tokens directly. Instead, use one of the supported mixins: `hero-1`, `hero-2`, `hero-3`, `hero-4`, `hero-5`, `heading-1`, `heading-2`, `heading-3`, `heading-4`, `heading-5`, `subheading`, `body-longform`, `body-default`, `footnote`, `caption`, `label-1`, `label-2`, `label-3`

`bpk-mixins`: </br>
- The following mixins have been removed:
    - `bpk-button--outline`, `bpk-button--selected`
    - `bpk-heading-6`, `bpk-heading--no-bottom-margin`
    - `bpk-grid__*`
    - `bpk-icon-sm` and `bpk-icon-lg`
