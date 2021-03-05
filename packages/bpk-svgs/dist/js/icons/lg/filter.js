import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7.293 5.293A1 1 0 0 0 7 6v.5a.5.5 0 0 1-.5.5H3a1 1 0 0 0 0 2h3.5a.5.5 0 0 1 .5.5v.5a1 1 0 1 0 2 0V6a1 1 0 0 0-1.707-.707zM11.48 17H12a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2h8.481zm5.665.146A.5.5 0 0 1 17.5 17H21a1 1 0 0 0 0-2h-3.5a.5.5 0 0 1-.5-.5V14a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0v-.5a.5.5 0 0 1 .146-.354zm-5.853-9.853A1 1 0 0 0 12 9h9a1 1 0 1 0 0-2h-9a1 1 0 0 0-.707.293z" clipRule="evenodd" /></svg>);