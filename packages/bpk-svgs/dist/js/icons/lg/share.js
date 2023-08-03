import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M14.735 4.276a1.051 1.051 0 00-1.759.78V7a1.001 1.001 0 01-1.002 1H9.3c-3.416 0-6.833 3.166-7.299 9.5a.582.582 0 00.972.406A9.67 9.67 0 019.3 15.333h2.674a1.001 1.001 0 011.002 1v2.61a1.05 1.05 0 001.826.713l6.922-7.575a1.056 1.056 0 00-.068-1.492z" /></svg>);