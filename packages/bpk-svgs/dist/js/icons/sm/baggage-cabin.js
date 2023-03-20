import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.5 0h3a2.25 2.25 0 012.25 2.25V12h.75a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25v.375a1.125 1.125 0 01-2.25 0V22.5h-4.5v.375a1.125 1.125 0 01-2.25 0V22.5a2.25 2.25 0 01-2.25-2.25v-6A2.25 2.25 0 017.5 12h.75V2.248A2.25 2.25 0 0110.5 0zm3.75 2.625a.375.375 0 00-.375-.375h-3.75a.375.375 0 00-.375.375V12h4.5V2.625z" /></svg>);