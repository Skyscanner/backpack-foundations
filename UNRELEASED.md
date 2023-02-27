**Breaking:**

`@skyscanner/bpk-foundations-web`: </br>
`bpk-mixins`: </br>
    The following tokens have been removed:
    - `bpk-card-color`, `bpk-modal-header-padding`, `bpk-panel-padding`, `bpk-panel-background-color`, as well as all `bpk-scrim-*` tokens.
    - `bpk-button-font-size`, `bpk-p-*`, `bpk-list-*`, `bpk-link-*`
    - `bpk-text-{size}-font-size`, `bpk-text-{size}-font-weight`, `bpk-text-{size}-line-height`, `bpk-text-{size}-letter-spacing`, where *size* is one of: `xs`, `sm`, `base`, `lg`, `xl`, `xxl`, `xxxl`, `xxxxl`, `xxxxxl`
    - `bpk-h-{size}-font-size`, `bpk-h-{size}-font-weight`, `bpk-h-{size}-line-height`, where *size* is one of: `1`, `2`, `3`, `4`, `5`, `6`
    
**Important** </br>
You should not use typography tokens directly. Instead, use one of the supported mixins: `hero-1`, `hero-2`, `hero-3`, `hero-4`, `hero-5`, `heading-1`, `heading-2`, `heading-3`, `heading-4`, `heading-5`, `subheading`, `body-longform`, `body-default`, `footnote`, `caption`, `label-1`, `label-2`, `label-3`

`bpk-mixins`: </br>
    The following mixins have been removed:
    - `bpk-heading-6`, `bpk-heading--no-bottom-margin`