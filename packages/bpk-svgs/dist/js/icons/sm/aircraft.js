import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M8.675 9a.45.45 0 01-.43-.316l-1.94-6.21A.75.75 0 017.02 1.5h1.003a1.5 1.5 0 011.236.65l5.528 6.098a.45.45 0 01-.334.752z" /><path d="M2.33 7.658a1.5 1.5 0 012.012.671l.878 1.756a.75.75 0 00.67.415h14.36c.75 0 2.25.75 2.25 1.5s-1.5 1.5-2.25 1.5h-4.46a1.5 1.5 0 00-1.237.65l-5.294 7.7a1.5 1.5 0 01-1.236.65H7.02a.75.75 0 01-.716-.974l2.204-7.052a.75.75 0 00-.716-.974h-1.9a.75.75 0 00-.672.415l-.878 1.756a1.5 1.5 0 01-2.684-1.342l.997-1.994a.75.75 0 000-.67L1.658 9.67a1.5 1.5 0 01.67-2.013h.001z" /></svg>);