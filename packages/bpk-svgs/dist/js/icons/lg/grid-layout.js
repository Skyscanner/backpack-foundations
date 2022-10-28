import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2 5a3 3 0 013-3h14a3 3 0 013 3v2a3 3 0 01-3 3H5a3 3 0 01-3-3zm0 10a3 3 0 013-3h3a3 3 0 013 3v4a3 3 0 01-3 3H5a3 3 0 01-3-3zm14-3a3 3 0 00-3 3v4a3 3 0 003 3h3a3 3 0 003-3v-4a3 3 0 00-3-3z" /></svg>);