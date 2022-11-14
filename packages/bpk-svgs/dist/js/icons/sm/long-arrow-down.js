import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 3a1.5 1.5 0 00-1.5 1.5v11.379l-4.94-4.94a1.5 1.5 0 00-2.12 2.122l7.5 7.5a1.5 1.5 0 002.12 0l7.5-7.5a1.5 1.5 0 00-2.12-2.122l-4.94 4.94V4.5A1.5 1.5 0 0012 3z" clipRule="evenodd" /></svg>);