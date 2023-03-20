import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M9 2.498V5H8a2 2 0 00-2 2v12a2 2 0 002 2v1a1 1 0 102 0v-1h4v1a1 1 0 102 0v-1a2 2 0 002-2V7a2 2 0 00-2-2h-1V2.5A1.5 1.5 0 0013.5 1h-3A1.5 1.5 0 009 2.498zM10 3a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v2h-4V3z" /></svg>);