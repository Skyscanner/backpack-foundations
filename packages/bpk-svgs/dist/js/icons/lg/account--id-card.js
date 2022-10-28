import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M18.922 2H5a3.226 3.226 0 00-3 3v13.768A3.27 3.27 0 005 22h14a3.226 3.226 0 003-3V5a3.238 3.238 0 00-3.078-3zM8 7.858A.878.878 0 018.897 7h1.206a.878.878 0 01.897.858v1.707a1.501 1.501 0 01-3 0zm6 7.557A1.537 1.537 0 0112.44 17H6.713A1.67 1.67 0 015 15.415v-.653a.892.892 0 01.487-.815A9.372 9.372 0 019.484 13a9.647 9.647 0 014.017.947.898.898 0 01.499.825zM18.5 11h-4a.5.5 0 010-1h4a.5.5 0 010 1zm0-2h-4a.5.5 0 010-1h4a.5.5 0 010 1z" /></svg>);