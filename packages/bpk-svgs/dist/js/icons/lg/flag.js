import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5 2a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1zm3.105 10.571c-.432.135-1.105-.23-1.105-.682V3.654a1.248 1.248 0 01.676-1.21A6.42 6.42 0 0110.25 2a8.172 8.172 0 013.25.857 8.155 8.155 0 003.25.857 7.203 7.203 0 002.145-.285c.432-.135 1.105.23 1.105.682v8.235a1.249 1.249 0 01-.676 1.21A6.438 6.438 0 0116.75 14a8.172 8.172 0 01-3.25-.857 8.155 8.155 0 00-3.25-.857 7.203 7.203 0 00-2.145.285z" /></svg>);