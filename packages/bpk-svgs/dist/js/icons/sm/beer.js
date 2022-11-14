import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M2.25 4.5a3 3 0 013-3h9a3 3 0 013 3V6c6 0 6 9 0 9v4.5a3 3 0 01-3 3h-9a3 3 0 01-3-3zm15 7.5c2 0 2-3 0-3zm-12 3.75c0 1 1.5 1 1.5 0V5.25c0-1-1.5-1-1.5 0z" /></svg>);