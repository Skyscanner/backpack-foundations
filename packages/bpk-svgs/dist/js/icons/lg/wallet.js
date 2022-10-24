import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M21.5 7.75a2.25 2.25 0 00-2.096-2.245L19.25 5.5H4a.5.5 0 01-.09-.992L4 4.5h9.928a.417.417 0 00.428-.542 2.251 2.251 0 00-1.942-1.452L12.25 2.5h-7.5a3.25 3.25 0 00-3.245 3.066L1.5 5.75v12.5a3.25 3.25 0 003.066 3.245l.184.005h14.5a2.25 2.25 0 002.245-2.096l.005-.154V17.5h-5a3 3 0 01-3-3v-2a3 3 0 013-3h5z" /><path d="M14.5 12.5a2 2 0 012-2h4a2 2 0 012 2v2a2 2 0 01-2 2h-4a2 2 0 01-2-2zm5 0c-.891 0-1.337 1.077-.707 1.707s1.707.184 1.707-.707a1 1 0 00-1-1z" /></svg>);