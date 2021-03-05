import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 21.31a1.5 1.5 0 0 1-1.5-1.5V8.431l-4.94 4.94a1.5 1.5 0 0 1-2.12-2.122L12 2.69l8.56 8.56a1.5 1.5 0 0 1-2.12 2.122L13.5 8.43v11.38a1.5 1.5 0 0 1-1.5 1.5z" /></svg>);