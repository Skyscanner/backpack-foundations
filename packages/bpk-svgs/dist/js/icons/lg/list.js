import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M4 8a2 2 0 10-2-2 2 2 0 002 2zm0 6a2 2 0 10-2-2 2 2 0 002 2zm2 4a2 2 0 11-2-2 2 2 0 012 2zM9 5a1 1 0 000 2h12a1 1 0 000-2zm-1 7a1 1 0 011-1h12a1 1 0 010 2H9a1 1 0 01-1-1zm1 5a1 1 0 000 2h12a1 1 0 000-2z" /></svg>);