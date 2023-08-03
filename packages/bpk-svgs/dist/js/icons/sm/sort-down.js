import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M2.26 18h6a1.5 1.5 0 010 3h-6a1.5 1.5 0 010-3zm4.75-4.5c.75 0 1.25-.6 1.25-1.5s-.5-1.5-1.25-1.5h-5c-.75 0-1.25.6-1.25 1.5s.5 1.5 1.25 1.5zm-.25-9A1.502 1.502 0 015.091 6H2.426a1.508 1.508 0 110-3h2.666A1.502 1.502 0 016.76 4.5zm4.94 11.56a1.5 1.5 0 012.12-2.12l1.94 1.939V4.5a1.5 1.5 0 013 0v11.379l1.94-1.94a1.5 1.5 0 012.12 2.122l-4.5 4.5a1.5 1.5 0 01-2.12 0l-4.5-4.5z" /></svg>);