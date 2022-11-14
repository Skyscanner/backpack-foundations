import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A1.5 1.5 0 0010.5 3v7.5H3a1.5 1.5 0 000 3h7.5V21a1.5 1.5 0 003 0v-7.5H21a1.5 1.5 0 000-3h-7.5V3A1.5 1.5 0 0012 1.5z" /></svg>);