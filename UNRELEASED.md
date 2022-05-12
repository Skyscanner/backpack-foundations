**Breaking:**

- bpk-foundations-web:
    - Updated breakpoint tokens:
        - `$bpk-breakpoint-mobile`, `breakpointMobile`
        - `$bpk-breakpoint-tablet`, `breakpointTablet`
        - `$bpk-breakpoint-desktop`, `breakpointDesktop`
        - `$bpk-breakpoint-query-above-mobile`, `breakpointQueryAboveMobile`
        - `$bpk-breakpoint-query-above-tablet`, `breakpointQueryAboveTablet`
        - `$bpk-breakpoint-query-above-desktop`, `breakpointQueryAboveDesktop`
        - `$bpk-breakpoint-query-mobile`, `breakpointQueryMobile`
        - `$bpk-breakpoint-query-tablet`, `breakpointQueryTablet`
        - `$bpk-breakpoint-query-tablet-only`, `breakpointQueryTabletOnly`
    - Modal max width tokens are using breakpoint tokens under the hood and therefore the following tokens have also changed:
        - `$bpk-modal-max-width`, `modalMaxWidth`
        - `$bpk-modal-wide-max-width`, `modalWideMaxWidth`

- bpk-mixins:
    - Updated breakpoint mixins:
        - `bpk-breakpoint-mobile`
        - `bpk-breakpoint-tablet`
        - `bpk-breakpoint-tablet-only`
        - `bpk-breakpoint-above-mobile`
        - `bpk-breakpoint-above-tablet`

**Added:**

- bpk-foundations-web:
    - Added new breakpoint tokens:
        - `$bpk-breakpoint-small-mobile`, `breakpointSmallMobile`
        - `$bpk-breakpoint-small-tablet`, `breakpointSmallTablet`
        - `$bpk-breakpoint-query-small-mobile`, `breakpointQuerySmallMobile`
        - `$bpk-breakpoint-query-small-tablet`, `breakpointQuerySmallTablet`
        - `$bpk-breakpoint-query-small-tablet-only`, `breakpointQuerySmallTabletOnly`

    - Added new breakpoint margin tokens to be used as a white space on the left-and-right of the screen:
        - `$bpk-breakpoint-small-mobile-margin`, `breakpointSmallMobileMargin`
        - `$bpk-breakpoint-mobile-margin`, `breakpointMobileMargin`
        - `$bpk-breakpoint-small-tablet-margin`, `breakpointSmallTabletMargin`
        - `$bpk-breakpoint-tablet-margin`, `breakpointTabletMargin`
        - `$bpk-breakpoint-desktop-margin`, `breakpointDesktopMargin`

- bpk-mixins:
    - Added new breakpoint mixins:
        - `bpk-breakpoint-small-mobile`
        - `bpk-breakpoint-small-tablet-only`

