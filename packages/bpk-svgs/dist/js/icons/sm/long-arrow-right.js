import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M2.69 12a1.5 1.5 0 0 0 1.5 1.5h11.379l-4.94 4.94a1.5 1.5 0 0 0 2.122 2.12L21.31 12l-8.56-8.56a1.5 1.5 0 0 0-2.122 2.12l4.94 4.94H4.19a1.5 1.5 0 0 0-1.5 1.5z" /></svg>);