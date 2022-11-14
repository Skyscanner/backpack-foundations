import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9 1.5A1.5 1.5 0 007.5 3v6.75a.75.75 0 01-.75.75H6a1.5 1.5 0 000 3h6a1.5 1.5 0 000-3h-.75a.75.75 0 01-.75-.75V3A1.5 1.5 0 009 1.5zm9 3A1.5 1.5 0 1016.5 3 1.5 1.5 0 0018 4.5zm0 18a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zM19.5 12a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5zM18 9a1.5 1.5 0 10-1.5-1.5A1.5 1.5 0 0018 9zm1.5 7.5A1.5 1.5 0 1118 15a1.5 1.5 0 011.5 1.5zM9 15a1.5 1.5 0 00-1.5 1.5V21a1.5 1.5 0 003 0v-4.5A1.5 1.5 0 009 15z" /></svg>);