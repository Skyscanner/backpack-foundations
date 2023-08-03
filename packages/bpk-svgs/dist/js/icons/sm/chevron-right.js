import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M8.095 4.887a1.496 1.496 0 012.008 0l5.948 6.397a1 1 0 01.003 1.358l-6.01 6.532a1.427 1.427 0 01-1.949-.138 1.572 1.572 0 01-.103-1.997l4.638-5.078-4.535-4.97a1.72 1.72 0 010-2.104z" /></svg>);