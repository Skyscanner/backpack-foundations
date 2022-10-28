import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.9 12.005h-.1a1 1 0 01-1-1l-.003-2.375h.003V6.394a1.305 1.305 0 00-.669-1.218l-1.947-.853a15.17 15.17 0 00-12.368 0l-1.947.853a1.306 1.306 0 00-.669 1.22v4.61a1 1 0 01-1 1h-.1A1.113 1.113 0 001 13.13v7.055a.82.82 0 001.626.136l.574-2.69h17.6l.575 2.69A.819.819 0 0023 20.184V13.13a1.113 1.113 0 00-1.1-1.125zm-15.9-2v-3a1 1 0 012 0v.84a5 5 0 017.157-.61 1 1 0 11-1.314 1.507 3 3 0 00-4.205.263H10a1 1 0 010 2H7a1 1 0 01-1-1zm12 4a1 1 0 11-2 0v-.175a5.001 5.001 0 01-7.434.925 1 1 0 011.324-1.5 3.001 3.001 0 004.814-1.25H14a1 1 0 010-2h3a1 1 0 011 1z" /></svg>);