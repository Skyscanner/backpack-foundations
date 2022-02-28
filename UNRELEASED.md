**Changed:**

- @skyscanner/bpk-foundations-web:
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
