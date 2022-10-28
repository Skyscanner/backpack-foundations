import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7 2.5a1 1 0 011-1h8a1 1 0 010 2H8a1 1 0 01-1-1zm15 5v9a3 3 0 01-3 3h-1v1a2 2 0 01-2 2H8a2 2 0 01-2-2v-1H5a3 3 0 01-3-3v-9a3 3 0 013-3h14a3 3 0 013 3zm-16 0a1 1 0 10-1 1 1 1 0 001-1zm10 8a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1z" /></svg>);