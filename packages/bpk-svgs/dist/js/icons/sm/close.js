import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M5.587 3.467a1.5 1.5 0 10-2.194 2.046q.036.038.074.074l6.438 6.44-6.44 6.44a1.5 1.5 0 002.122 2.12l6.44-6.438 6.44 6.44a1.5 1.5 0 002.12-2.122l-6.438-6.44 6.44-6.44a1.5 1.5 0 00-2.122-2.12l-6.44 6.438-6.44-6.44z" /></svg>);