import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 17.25a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5zM12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>);