import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M10.5 0a2.25 2.25 0 00-2.25 2.248V6H7.5a2.25 2.25 0 00-2.25 2.25v12A2.25 2.25 0 007.5 22.5v.375a1.125 1.125 0 002.25 0V22.5h4.5v.375a1.125 1.125 0 002.25 0V22.5a2.25 2.25 0 002.25-2.25v-12A2.25 2.25 0 0016.5 6h-.75V2.25A2.25 2.25 0 0013.5 0h-3zm3.375 2.25c.207 0 .375.168.375.375V6h-4.5V2.625c0-.207.168-.375.375-.375h3.75z" /></svg>);