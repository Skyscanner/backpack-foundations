import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><g clipPath="url(#clip0_8306_180)"><path d="M9 1.8A1.8 1.8 0 0110.8 0h2.4A1.8 1.8 0 0115 1.8v1.95a.75.75 0 01-1.5 0V3h-3v.75a.75.75 0 01-1.5 0V1.8zM8.25 6h7.5c.049 0 .097.002.146.005L21.453.446a1.485 1.485 0 012.1 2.1l-5.559 5.56L6 20.1l-3.45 3.45a1.485 1.485 0 11-2.1-2.1L6 15.9V8.25A2.25 2.25 0 018.25 6zm0 16.249c0-.1.04-.195.11-.266l9-9a.375.375 0 01.64.266v7.001a2.25 2.25 0 01-2.25 2.25v.375a1.125 1.125 0 01-2.25 0V22.5h-3v.375a1.125 1.125 0 01-2.25 0v-.626z" /></g></svg>);