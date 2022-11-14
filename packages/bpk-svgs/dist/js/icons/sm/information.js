import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M22.854 9.233l-8.087-8.087a3.913 3.913 0 00-5.534 0L1.146 9.233a3.913 3.913 0 000 5.534l8.087 8.087a3.913 3.913 0 005.534 0l8.087-8.087a3.913 3.913 0 000-5.534zM13.5 16.5a1.5 1.5 0 01-3 0V12a1.5 1.5 0 013 0zM12 9a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0112 9z" /></svg>);