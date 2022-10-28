import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M3.419 5.25a1.962 1.962 0 00-1.922 2v9a1 1 0 001 1h10.25a.925.925 0 00.843-.742 3.001 3.001 0 015.82.026.859.859 0 00.748.702c.338.014.64.014.839.014h.739a.762.762 0 00.758-.75q.022-.882-.008-1.765c.04-.985-.491-2.985-1.491-3.485a7.242 7.242 0 00-2.865-.965 1.04 1.04 0 01-.68-.345l-2.566-2.944A3.772 3.772 0 0011.51 5.25H9.958a1.007 1.007 0 000 2h1.559c1.11 0 1.622 0 2.073.603l.766 1.01a1.455 1.455 0 01-.51 2.387h-3.4a2 2 0 01-1.868-1.286L7.415 6.921A1.946 1.946 0 005.519 5.25z" /><path d="M16.497 18.75a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5z" /></svg>);