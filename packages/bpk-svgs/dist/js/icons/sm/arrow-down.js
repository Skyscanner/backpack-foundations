import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M16.537 8.25H7.463a1.358 1.358 0 00-1.11 2.251l4.354 4.77a1.53 1.53 0 002.184.04l4.718-4.77a1.357 1.357 0 00-1.072-2.291z" /></svg>);