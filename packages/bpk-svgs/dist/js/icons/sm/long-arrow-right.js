import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3 12a1.5 1.5 0 001.5 1.5h11.379l-4.94 4.94a1.5 1.5 0 002.122 2.12l7.5-7.5a1.5 1.5 0 000-2.12l-7.5-7.5a1.5 1.5 0 00-2.122 2.12l4.94 4.94H4.5A1.5 1.5 0 003 12z" clipRule="evenodd" /></svg>);