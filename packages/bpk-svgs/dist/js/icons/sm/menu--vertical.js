import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 6a3 3 0 113-3 3 3 0 01-3 3zm0 9a3 3 0 113-3 3 3 0 01-3 3zm-3 6a3 3 0 103-3 3 3 0 00-3 3z" /></svg>);