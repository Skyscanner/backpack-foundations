import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9 1.8A1.8 1.8 0 0110.8 0h2.4A1.8 1.8 0 0115 1.8v1.95a.75.75 0 01-1.5 0V3h-3v.75a.75.75 0 01-1.5 0V1.8zM8.25 6h7.5A2.25 2.25 0 0118 8.25v12a2.25 2.25 0 01-2.25 2.25v.375a1.125 1.125 0 01-2.25 0V22.5h-3v.375a1.125 1.125 0 01-2.25 0V22.5A2.25 2.25 0 016 20.25v-12A2.25 2.25 0 018.25 6z" /></svg>);