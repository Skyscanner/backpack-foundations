import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M13.94 1.94a1.5 1.5 0 012.12 0l6 6a1.5 1.5 0 010 2.12l-6 6a1.5 1.5 0 01-2.12-2.12l3.439-3.44H9a4.5 4.5 0 100 9h3a1.5 1.5 0 010 3H9a7.5 7.5 0 010-15h8.379l-3.44-3.44a1.5 1.5 0 010-2.12z" /></svg>);