import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.993 14.116a1 1 0 01-1.986.001L11 16l-.002-5.001.007-.117a1 1 0 011.986 0l.007.117L13 16zm-.995-7.12a.999.999 0 010-1.997h.063a.999.999 0 11-.063 1.997z" /></svg>);