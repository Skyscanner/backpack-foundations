import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.53 10.53 0 0012 1.5zm4.475 6.63l-1.785 5.352a1.91 1.91 0 01-1.208 1.209L8.13 16.474a.478.478 0 01-.605-.605l1.784-5.352a1.91 1.91 0 011.209-1.208v.001l5.352-1.785a.478.478 0 01.605.605zM13.5 12a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5z" /></svg>);