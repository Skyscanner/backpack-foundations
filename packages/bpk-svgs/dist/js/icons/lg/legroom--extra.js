import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7.5 3a1 1 0 00-1 1v8c0 2 1 4 3.5 4h2.5a2.085 2.085 0 012 1l1.35 3.506a.885.885 0 00.768.494h3.047c.552 0 1.02-.473.762-.961a1.987 1.987 0 00-1.754-1.064.402.402 0 01-.356-.216L16 14.306a2.22 2.22 0 00-1.344-1.145l-2.989-.838a1 1 0 01-.724-.855l-.697-6.454A2.277 2.277 0 008.128 3z" /><path d="M5.5 6a1 1 0 00-2 0v5.636a8.868 8.868 0 001.25 5.122C5.783 18.227 7.467 19 9.832 19H12.5a1 1 0 000-2H9.833c-1.9 0-2.884-.592-3.449-1.394a6.968 6.968 0 01-.884-3.97z" /></svg>);