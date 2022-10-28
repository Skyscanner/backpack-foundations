import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1010 10A10.03 10.03 0 0012 2zm1.5 12H10v2a1 1 0 01-2 0V7h5.5a3.5 3.5 0 010 7zm1.5-3.5a1.5 1.5 0 01-1.5 1.5H10V9h3.5a1.5 1.5 0 011.5 1.5z" /></svg>);