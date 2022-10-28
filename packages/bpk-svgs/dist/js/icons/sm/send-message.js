import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3.122 1.625l19.07 9.858a.587.587 0 010 1.034L3.12 22.375a1.132 1.132 0 01-1.572-1.365l1.74-6.045a1.135 1.135 0 01.83-.799l8.445-1.94a.233.233 0 000-.452l-8.446-1.94a1.135 1.135 0 01-.83-.8L1.55 2.99a1.133 1.133 0 011.574-1.365z" /></svg>);