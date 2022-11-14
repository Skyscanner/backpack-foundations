import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M19.5 1.5h-15a3 3 0 00-3 3v15a3 3 0 003 3H18a1.5 1.5 0 000-3H5.25a.75.75 0 010-1.5H19.5a3 3 0 003-3V4.5a3 3 0 00-3-3zM17.25 12H6.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5zm0-3H6.75a.75.75 0 010-1.5h10.5a.75.75 0 010 1.5z" /></svg>);