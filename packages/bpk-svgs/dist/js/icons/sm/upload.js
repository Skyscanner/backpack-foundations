import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 15a1.5 1.5 0 001.5-1.5V6.621l1.94 1.94a1.5 1.5 0 002.12-2.122l-4.5-4.5a1.5 1.5 0 00-2.12 0l-4.5 4.5a1.5 1.5 0 102.12 2.122l1.94-1.94V13.5A1.5 1.5 0 0012 15zm-9-2.25a1.5 1.5 0 011.5 1.5V18A1.5 1.5 0 006 19.5h12a1.5 1.5 0 001.5-1.5v-3.75a1.5 1.5 0 013 0V18a4.5 4.5 0 01-4.5 4.5H6A4.5 4.5 0 011.5 18v-3.75a1.5 1.5 0 011.5-1.5z" clipRule="evenodd" /></svg>);