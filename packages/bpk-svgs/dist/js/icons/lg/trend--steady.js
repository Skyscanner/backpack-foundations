import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M14.293 17.713a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.438 1.39l.024.024 3.293 3.293H4a1 1 0 000 2h13.586L14.293 16.3a1 1 0 000 1.414z" /></svg>);