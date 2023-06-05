**Breaking:**
Removing deprecated border tokens and mixins.

`@skyscanner/bpk-foundations-web`:
  - Removed `border-radius-pill` and `border-radius-pill-lg` tokens. Use `bpk-border-radius-md` instead. Otherwise, check with your designer to choose any other supported radius.

`bpk-mixins`:
  - Removed `bpk-border-radius-pill` mixin. `Use bpk-border-radius-lg` as the replacement.
  - Removed deprecated badge mixins
    - Removed `bpk-badge--light` mixin, please use `bpk-badge--normal`.
    - Removed `bpk-badge--destructive` mixin, please use `bpk-badge--critical`.

**Added:**

`@skyscanner/bpk-svgs:
- Add new upload icon
