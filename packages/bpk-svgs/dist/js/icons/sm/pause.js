import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M6 1.5A1.5 1.5 0 004.5 3v18A1.5 1.5 0 006 22.5h3a1.5 1.5 0 001.5-1.5V3A1.5 1.5 0 009 1.5zm9 0A1.5 1.5 0 0013.5 3v18a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5V3A1.5 1.5 0 0018 1.5z" /></svg>);