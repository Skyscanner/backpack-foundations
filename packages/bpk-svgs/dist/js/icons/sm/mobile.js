import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M16.125 0h-8.25A3.375 3.375 0 004.5 3.375v17.25A3.375 3.375 0 007.875 24h8.25a3.375 3.375 0 003.375-3.375V3.375A3.375 3.375 0 0016.125 0zm-3.75 21.75h-.75a1.125 1.125 0 010-2.25h.75a1.125 1.125 0 010 2.25z" /></svg>);