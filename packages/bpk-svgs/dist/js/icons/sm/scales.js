import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M22.155 4.377C20.481 2.852 17.781 1.5 12 1.5c-5.815 0-8.777 1.38-10.233 2.904a1.015 1.015 0 00-.267.71V19A3.5 3.5 0 005 22.5h14a3.5 3.5 0 003.5-3.5V5.187a1.09 1.09 0 00-.345-.81zM12 19.5a7.5 7.5 0 117.5-7.5 7.5 7.5 0 01-7.5 7.5zm1.39-8.385A1.726 1.726 0 0112 13.5a1.727 1.727 0 01-1.391-2.385l1.186-3.441a.208.208 0 01.41 0z" /></svg>);