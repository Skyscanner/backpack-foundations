import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9.75 3a1.5 1.5 0 00-3 0v11.25A2.25 2.25 0 009 16.5h5.469a3 3 0 012.683 1.658l1.756 3.513a1.5 1.5 0 002.684-1.342l-1.757-3.512A6 6 0 0014.47 13.5H9.75z" /><path d="M5.25 6a1.5 1.5 0 00-3 0v9a6 6 0 006 6h6a1.5 1.5 0 000-3h-6a3 3 0 01-3-3z" /></svg>);