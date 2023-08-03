import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M9 2.498A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v5.017l6.257-6.221a1 1 0 011.415 0l.035.035a1 1 0 010 1.415L2.743 22.71a1 1 0 01-1.414 0l-.036-.036a1 1 0 010-1.414L6 16.53V14a2 2 0 012-2h1V2.498zm5 6.013V3a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v9h.511l1.988-1.996L14 8.51zM8 20.603a.25.25 0 01.073-.176l8.242-8.289a.233.233 0 01.228-.063A2.001 2.001 0 0118 14v5a2 2 0 01-2 2v1a1 1 0 11-2 0v-1h-4v1a1 1 0 11-2 0v-1.397z" /></svg>);