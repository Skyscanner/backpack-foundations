import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M19.193 17.981l-3.79-8.727A4.33 4.33 0 0115 7.425V2.548a1.031 1.031 0 00-1.012-1.05h-3.976A1.031 1.031 0 009 2.548v4.881a4.33 4.33 0 01-.404 1.83l-3.79 8.722a3.146 3.146 0 002.734 4.521h8.92a3.145 3.145 0 002.733-4.521zm-3.148-1.539a.75.75 0 01-.985-.395l-2.25-5.25a.75.75 0 011.38-.59l2.25 5.25a.75.75 0 01-.395.985z" /></svg>);