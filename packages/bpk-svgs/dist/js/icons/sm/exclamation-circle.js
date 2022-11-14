import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zM12 18a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0112 18zm1.5-6a1.5 1.5 0 01-3 0V7.5a1.5 1.5 0 013 0z" /></svg>);