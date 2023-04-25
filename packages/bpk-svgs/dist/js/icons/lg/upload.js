import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.707 7.292a1 1 0 01-1.414 1.414L13 5.413v8.589a1 1 0 11-2 0V5.413L7.707 8.706a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0l5 5zM4 14a1 1 0 011 1v3a2 2 0 002 2h10a2 2 0 002-2v-3a1 1 0 112 0v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" clipRule="evenodd" /></svg>);