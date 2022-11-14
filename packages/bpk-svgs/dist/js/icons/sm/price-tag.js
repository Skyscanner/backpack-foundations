import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12.458 3h4.7A3.842 3.842 0 0121 6.842v4.7a2.21 2.21 0 01-.647 1.563l-7.248 7.248a2.21 2.21 0 01-3.125 0L3.647 14.02a2.21 2.21 0 010-3.125l7.248-7.248A2.21 2.21 0 0112.458 3zM16.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>);