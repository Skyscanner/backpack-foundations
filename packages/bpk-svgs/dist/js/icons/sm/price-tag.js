import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M12.458 3h4.7A3.842 3.842 0 0 1 21 6.842v4.7a2.21 2.21 0 0 1-.647 1.563l-7.248 7.248a2.21 2.21 0 0 1-3.125 0L3.647 14.02a2.21 2.21 0 0 1 0-3.125l7.248-7.248A2.21 2.21 0 0 1 12.458 3zM16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /></svg>);