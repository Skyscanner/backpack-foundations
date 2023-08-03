import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M15.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L18.586 10H8.5a4.5 4.5 0 100 9H12a1 1 0 110 2H8.5a6.5 6.5 0 110-13h10.086l-3.293-3.293a1 1 0 010-1.414z" /></svg>);