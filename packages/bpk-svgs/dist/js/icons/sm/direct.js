import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M7.94 11.99a3.75 3.75 0 0 0-3.75 3.75v3.75a1.5 1.5 0 0 1-3 0v-3.75a6.75 6.75 0 0 1 6.75-6.75h12a1.5 1.5 0 0 1 0 3z" /><path d="M13.63 17.55a1.5 1.5 0 0 1 0-2.12l4.938-4.94-4.94-4.94a1.5 1.5 0 0 1 2.122-2.12l7.06 7.06-7.06 7.06a1.5 1.5 0 0 1-2.12.001h-.002z" /></svg>);