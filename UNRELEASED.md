**Breaking:**

`@skyscanner/bpk-foundations-web`: </br>
`bpk-mixins`: </br>
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

</br> `bpk-mixins`: </br>
- The following mixins have been removed:
    - `bpk-button--outline`, `bpk-button--selected`
    - `bpk-heading-6`, `bpk-heading--no-bottom-margin`
    - `bpk-grid__*`
    - `bpk-icon-sm` and `bpk-icon-lg`


</br> `@skyscanner/bpk-foundations-web`: </br>
- The following files have been removed.
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.common`
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.default.scss`
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.es6`
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.scss`
    - `@skyscanner/bpk-foundations-web/tokens/breakpoints.raw`

If you are importing tokens from any of the above mentioned files, please replace the import path as such:
`@skyscanner/bpk-foundations-web/tokens/`**`breakpoints`**`.extension` -> `@skyscanner/bpk-foundations-web/tokens/`**`base`**`.extension`