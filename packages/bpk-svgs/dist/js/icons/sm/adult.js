import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M10.8 1.774A2.637 2.637 0 0112 1.5a2.563 2.563 0 011.196.28.685.685 0 01.304.62v2.262A1.377 1.377 0 0112 6a1.377 1.377 0 01-1.5-1.338V2.4a.681.681 0 01.3-.626zM15 13.835V9.452a1.514 1.514 0 00-.536-1.277 4.444 4.444 0 00-2.429-.675 4.575 4.575 0 00-2.5.784A1.545 1.545 0 009 9.568v4.383a2.458 2.458 0 00.295 1.217c.05.087.103.175.157.263a3.131 3.131 0 01.563 1.414l.408 4.312c.054.764.483 1.343.995 1.343h1.235c.511 0 .94-.58.994-1.343l.408-4.312a3.272 3.272 0 01.477-1.32c.074-.14.148-.277.214-.417A3.083 3.083 0 0015 13.835z" /></svg>);