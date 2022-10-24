import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-4.561 8.561a1.5 1.5 0 11.486.325 1.5 1.5 0 01-.486-.325zM15 17H9a1 1 0 010-2h6a1 1 0 010 2zm.5-6.001a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" /></svg>);