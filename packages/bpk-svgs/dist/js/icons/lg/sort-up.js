import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M2.506 7h8a.945.945 0 001-1 .945.945 0 00-1-1h-8a.945.945 0 00-1 1 .945.945 0 001 1zm6.167 3c.5 0 .833.4.833 1s-.333 1-.833 1H2.34c-.5 0-.833-.4-.833-1s.333-1 .833-1zm-1.167 6a1 1 0 00-1.11-1h-3.78a1.006 1.006 0 10.001 2h3.78a1 1 0 001.11-1zM12.8 9.293a1 1 0 001.414 1.414l2.293-2.293V18a1 1 0 002 0V8.414l2.293 2.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0z" /></svg>);