import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M18.5 9.905l-9.88-7.85A2.553 2.553 0 004.5 4.149V19.85a2.554 2.554 0 004.12 2.096l9.88-7.85a2.697 2.697 0 000-4.192z" /></svg>);