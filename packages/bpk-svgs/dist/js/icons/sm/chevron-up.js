import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M4.887 15.905a1.496 1.496 0 010-2.008l6.397-5.948a1 1 0 011.358-.004l6.532 6.012a1.427 1.427 0 01-.138 1.948 1.572 1.572 0 01-1.997.103L11.96 11.37l-4.97 4.535a1.72 1.72 0 01-2.104 0z" /></svg>);