import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M7.94 1.94A1.5 1.5 0 007.5 3v.75a.75.75 0 01-.75.75H3a1.5 1.5 0 000 3h3.75a.75.75 0 01.75.75V9a1.5 1.5 0 003 0V3a1.5 1.5 0 00-2.56-1.06zm.282 17.56H9a1.5 1.5 0 100-3H3a1.5 1.5 0 100 3h5.222zm6.998.22a.75.75 0 01.53-.22H21a1.5 1.5 0 100-3h-5.25a.75.75 0 01-.75-.75V15a1.5 1.5 0 10-3 0v6a1.5 1.5 0 103 0v-.75a.75.75 0 01.22-.53zM13.94 4.94A1.5 1.5 0 0015 7.5h6a1.5 1.5 0 000-3h-6a1.5 1.5 0 00-1.06.44z" clipRule="evenodd" /></svg>);