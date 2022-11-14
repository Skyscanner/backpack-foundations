import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M1.5 4.5a3 3 0 013-3h15a3 3 0 013 3v3a3 3 0 01-3 3h-15a3 3 0 01-3-3zm0 12a3 3 0 013-3h3a3 3 0 013 3v3a3 3 0 01-3 3h-3a3 3 0 01-3-3zm15-3a3 3 0 00-3 3v3a3 3 0 003 3h3a3 3 0 003-3v-3a3 3 0 00-3-3z" /></svg>);