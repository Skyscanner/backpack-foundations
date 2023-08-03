**Changed:**
`bpk-mixins`:
- Specified a wider support range for `node-sass` library.

**Breaking:**
`bpk-svgs`:
- All JS icons have `aria-hidden` attribute set to true by default to hide icons from Assistive Technologies. You can overwrite the value if needed by passing `aria-hidden="false"` to the icon component.