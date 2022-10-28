import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M2.483 6.063a3.36 3.36 0 00.572 5.211l4.131 2.63A4.48 4.48 0 018.79 15.68l1.918 3.836a1.12 1.12 0 001.794.291l2.083-2.05a.75.75 0 011.057.005l4.298 4.3a1.5 1.5 0 002.122-2.123l-4.299-4.298a.75.75 0 01-.004-1.057l2.05-2.083a1.12 1.12 0 00-.292-1.794L15.68 8.79a4.48 4.48 0 01-1.776-1.602l-2.629-4.13a3.36 3.36 0 00-5.21-.573l-3.58 3.58z" /></svg>);