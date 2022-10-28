import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.24 3.927l-2.213-.757a21.687 21.687 0 00-14.054 0l-2.213.757A1.137 1.137 0 002 5.008v10.584a3.377 3.377 0 003.333 3.421h2.49a2 2 0 011.432.6l2.03 2.082a1 1 0 001.414.016l.016-.016 2.03-2.082a2 2 0 011.432-.6h2.49A3.377 3.377 0 0022 15.592V5.009a1.138 1.138 0 00-.76-1.082zM8.995 10.988a1 1 0 11-1-1 1 1 0 011 1zm3 1a1 1 0 111-1 1 1 0 01-1.002.999zm4 0a1 1 0 111-1 1 1 0 01-1.004.999z" /></svg>);