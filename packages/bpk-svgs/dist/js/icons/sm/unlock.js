import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20.316 10.647L18.325 10A20.5 20.5 0 009 9.22V7.5a3 3 0 015.847-.949l.002-.001a1.5 1.5 0 002.842-.947l.003-.001A6.001 6.001 0 006 7.5v2.398c-.108.032-.217.067-.325.102l-1.991.647a.977.977 0 00-.684.924v8.262A2.848 2.848 0 006 22.5h12a2.848 2.848 0 003-2.667v-8.262a.977.977 0 00-.684-.924zM13.5 16.5a1.5 1.5 0 01-3 0V15a1.5 1.5 0 013 0z" /></svg>);