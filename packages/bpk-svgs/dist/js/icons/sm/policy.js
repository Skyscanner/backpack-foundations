import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M18 1.5h-7.94a2.812 2.812 0 00-1.992.825L3.826 6.567A2.815 2.815 0 003 8.56V19.5a3 3 0 003 3h12a3.002 3.002 0 003-3V4.65a3.31 3.31 0 00-3-3.15zM6.137 6.707L9.72 3.135v-.001a.458.458 0 01.78.33v3.573a.46.46 0 01-.458.462H6.459a.464.464 0 01-.322-.792zM15 13.982c0 1.947-1.852 3.384-2.646 3.91a.637.637 0 01-.708 0C10.852 17.366 9 15.929 9 13.981v-2.598a.425.425 0 01.28-.397 7.855 7.855 0 015.44 0 .425.425 0 01.28.398z" /></svg>);