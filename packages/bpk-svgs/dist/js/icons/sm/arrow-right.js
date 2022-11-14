import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M8.25 7.463v9.074a1.358 1.358 0 002.251 1.11l4.77-4.354a1.53 1.53 0 00.04-2.184l-4.77-4.718A1.357 1.357 0 008.25 7.463z" /></svg>);