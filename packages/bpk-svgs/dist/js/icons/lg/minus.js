import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M1.5 12A1.5 1.5 0 013 10.5h18a1.5 1.5 0 010 3H3A1.5 1.5 0 011.5 12z" /></svg>);