import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M19.5 1.5h-15a3 3 0 00-3 3v15a3 3 0 003 3h15a3 3 0 003-3v-15a3 3 0 00-3-3zm0 16.5a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 18V9A1.5 1.5 0 016 7.5h12A1.5 1.5 0 0119.5 9z" /></svg>);