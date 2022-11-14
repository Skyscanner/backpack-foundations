import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M21 3H3a3 3 0 00-3 3v12a3 3 0 003 3h18a3 3 0 003-3V6a3 3 0 00-3-3zM4.5 13.5A1.5 1.5 0 116 12a1.5 1.5 0 01-1.5 1.5zM12 15a3 3 0 113-3 3 3 0 01-3 3zm7.5-1.5A1.5 1.5 0 1121 12a1.5 1.5 0 01-1.5 1.5z" /></svg>);