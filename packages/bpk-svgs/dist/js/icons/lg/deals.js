import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20.121 4.621l-1.535-1.535a2 2 0 00-1.414-.586H6.828a2 2 0 00-1.414.586L3.88 4.62A3 3 0 003 6.743V18.5a3 3 0 003 3h12a3 3 0 003-3V6.743a3 3 0 00-.879-2.122zM12 15.5a5 5 0 01-5-5 1 1 0 012 0 3 3 0 006 0 1 1 0 012 0 5 5 0 01-5 5zm6.147-9.147a.5.5 0 01-.354.147H6.207a.5.5 0 01-.353-.854l.853-.853a1 1 0 01.707-.293h9.172a1 1 0 01.707.293l.853.853a.5.5 0 010 .707z" /></svg>);