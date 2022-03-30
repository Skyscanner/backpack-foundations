**Fixed:**

- bpk-mixins:
    - Fixed padding in icon-only buttons
    - Restored vertical padding as it was causing the text inside anchor buttons to be misaligned due to the minimum height property which was previously added


**Breaking:**
- bpk-mixins:
    - Introduced vertical padding in `bpk-button--link` mixin. If applying this mixin to a button, it will increase in height so needs to be check it does not alter layout
    - `bpk-button--padded` mixin is deleted as link buttons come by default with padding