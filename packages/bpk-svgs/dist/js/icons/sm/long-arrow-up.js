import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12 21a1.5 1.5 0 01-1.5-1.5V8.121l-4.94 4.94a1.5 1.5 0 01-2.12-2.122l7.5-7.5a1.5 1.5 0 012.12 0l7.5 7.5a1.5 1.5 0 01-2.12 2.122L13.5 8.12V19.5A1.5 1.5 0 0112 21z" clipRule="evenodd" /></svg>);