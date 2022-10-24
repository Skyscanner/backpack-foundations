import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M3.967 3.107l17.253 8.45a.491.491 0 010 .886l-17.253 8.45a1.005 1.005 0 01-1.423-1.17l1.574-5.181a1.004 1.004 0 01.751-.685l7.641-1.663a.197.197 0 000-.388l-7.64-1.663a1.004 1.004 0 01-.752-.685l-1.574-5.18a1.005 1.005 0 011.423-1.17z" /></svg>);