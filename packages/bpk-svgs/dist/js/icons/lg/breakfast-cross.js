import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.494 5.03a.55.55 0 01-.5-.53V4a2 2 0 00-2-2h-8a2 2 0 00-2 2v12a3 3 0 003 3h6a3 3 0 003-3v-2.5a.551.551 0 01.5-.53 4 4 0 000-7.94zm-3.78 6.33a.961.961 0 01-1.36 1.359l-1.36-1.36-1.36 1.36a.961.961 0 01-1.357-1.36L9.635 10l-1.36-1.36.002.001a.961.961 0 011.359-1.36l1.359 1.361 1.36-1.36a.961.961 0 011.359 1.36L12.354 10zm5.22-1.866a2 2 0 01-1.444 1.444.416.416 0 01-.495-.438v-3a.416.416 0 01.495-.438 2 2 0 011.444 2.432zM18.994 21a1 1 0 01-1 1h-14a1 1 0 010-2h14a1 1 0 011 1z" /></svg>);