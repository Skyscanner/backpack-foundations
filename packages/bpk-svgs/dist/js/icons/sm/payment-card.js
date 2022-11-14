import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3 3a3 3 0 00-3 3v2.25A.75.75 0 00.75 9h22.5a.75.75 0 00.75-.75V6a3 3 0 00-3-3zm21 8.25a.75.75 0 00-.75-.75H.75a.75.75 0 00-.75.75V18a3 3 0 003 3h18a3 3 0 003-3z" /></svg>);