import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M6 2.498A1.5 1.5 0 017.5 1h3A1.5 1.5 0 0112 2.5V5h1a2 2 0 012 2v4.871a.258.258 0 01-.208.25 6.002 6.002 0 00-4.193 8.496c.085.174-.037.383-.23.383H7v1a1 1 0 11-2 0v-1a2 2 0 01-2-2V7a2 2 0 012-2h1V2.498zm1.5.002A.5.5 0 007 3v2h4V3a.5.5 0 00-.5-.5h-3zm13.501 15.501A5 5 0 1111 18a5 5 0 0110.001.001zm-2.001 0a1 1 0 00-1-1h-1v-1a1 1 0 10-2 0v1h-1A1 1 0 0014 19h1v1a1 1 0 102 0v-1h1a1 1 0 001-1z" /></svg>);