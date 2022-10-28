import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18 2h-7.94a2.885 2.885 0 00-1.992.786l-4.242 4.04A2.622 2.622 0 003 8.724v10.419A2.932 2.932 0 006 22h12a2.932 2.932 0 003-2.857V5a3.226 3.226 0 00-3-3zM8.624 7.256a.3.3 0 01-.3.3H5.98a.3.3 0 01-.21-.514l2.344-2.315a.3.3 0 01.51.213zM17 13.412c0 2.634-2.47 4.579-3.528 5.291a.839.839 0 01-.944 0C11.47 17.991 9 16.046 9 13.412V9.898a.574.574 0 01.372-.538 10.33 10.33 0 017.256 0 .574.574 0 01.372.538z" /></svg>);