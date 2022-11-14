import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zm.75 13.5H10.5v1.5a1.5 1.5 0 01-3 0V9A1.5 1.5 0 019 7.5h3.75a3.75 3.75 0 010 7.5zm.75-3.75a.75.75 0 01-.75.75H10.5v-1.5h2.25a.75.75 0 01.75.75z" /></svg>);