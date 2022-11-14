import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M17.7 1.5H4.031A1.04 1.04 0 003 2.55v18.9a1.04 1.04 0 001.031 1.05H17.7A3.405 3.405 0 0021 19V5a3.405 3.405 0 00-3.3-3.5zM12 6a3 3 0 11-3 3 3 3 0 013-3zm3 12H9a1.5 1.5 0 010-3h6a1.5 1.5 0 010 3z" /></svg>);