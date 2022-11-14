import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M15.328 15a7.86 7.86 0 01-6.33-6.328 7.997 7.997 0 011.9-6.751c.105-.211 0-.422-.212-.422a10.546 10.546 0 1011.815 11.815c0-.211-.21-.422-.422-.211A8.24 8.24 0 0115.33 15z" /></svg>);