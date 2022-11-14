import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm5.56-12.44a1.5 1.5 0 00-2.12-2.12l-4.94 4.939-1.94-1.94a1.5 1.5 0 00-2.12 2.122l3 3a1.5 1.5 0 002.12 0l6-6z" /></svg>);