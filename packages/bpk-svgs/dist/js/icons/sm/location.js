import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M13.5 16.963a.806.806 0 01.595-.76 7.5 7.5 0 10-4.19 0 .806.806 0 01.595.76V21a1.5 1.5 0 003 0z" /></svg>);