import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 6a3 3 0 113-3 3 3 0 01-3 3zm0 9a3 3 0 113-3 3 3 0 01-3 3zm-3 6a3 3 0 103-3 3 3 0 00-3 3z" /></svg>);