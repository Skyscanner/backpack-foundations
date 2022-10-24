import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zM12 6a1.498 1.498 0 11-1.498 1.498A1.498 1.498 0 0112 6zm1.493 10.676a1.5 1.5 0 01-2.98.001l-.01-.175-.003-4.501.01-.176a1.5 1.5 0 012.98 0l.01.175.003 4.501z" /></svg>);