import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3 1.5a3 3 0 00-3 3v.75a.925.925 0 00.742.843 3.001 3.001 0 012.162 3.652 3.001 3.001 0 01-2.162 2.162.925.925 0 00-.742.843v.75a3 3 0 003 3h18a3 3 0 003-3v-.75a.925.925 0 00-.742-.843 3.001 3.001 0 010-5.814A.925.925 0 0024 5.25V4.5a3 3 0 00-3-3zM1.5 18.75a.75.75 0 01.75-.75h19.5a.75.75 0 010 1.5H2.25a.75.75 0 01-.75-.75zm1.5 3a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" /></svg>);