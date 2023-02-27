**Breaking:**

- `@skyscanner/bpk-foundations-web`:
    - The following files have been removed.
        - `@skyscanner/bpk-foundations-web/tokens/breakpoints.common`
        - `@skyscanner/bpk-foundations-web/tokens/breakpoints.default.scss`
        - `@skyscanner/bpk-foundations-web/tokens/breakpoints.es6`
        - `@skyscanner/bpk-foundations-web/tokens/breakpoints.scss`
        - `@skyscanner/bpk-foundations-web/tokens/breakpoints.raw`
    
    If you are importing tokens from any of the above mentioned files, please replace the import path as such:
    `@skyscanner/bpk-foundations-web/tokens/`**`breakpoints`**`.extension` -> `@skyscanner/bpk-foundations-web/tokens/`**`base`**`.extension`