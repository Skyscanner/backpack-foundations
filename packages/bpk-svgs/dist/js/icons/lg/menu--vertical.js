import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 7a2 2 0 10-2-2 2 2 0 002 2zm0 7a2 2 0 10-2-2 2 2 0 002 2zm2 5a2 2 0 11-2-2 2 2 0 012 2z" /></svg>);