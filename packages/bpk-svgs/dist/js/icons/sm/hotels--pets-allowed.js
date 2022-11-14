import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9 3a1.5 1.5 0 00-1.5 1.5V6a1.5 1.5 0 003 0V4.5A1.5 1.5 0 009 3zM3 9a1.5 1.5 0 013 0v1.5a1.5 1.5 0 01-3 0zm10.89 2.49l3.457 4.52a3.406 3.406 0 01.433 3.217A2.558 2.558 0 0115.458 21l-1.19-.341a8.197 8.197 0 00-4.535 0L8.543 21a2.56 2.56 0 01-2.323-1.773 3.403 3.403 0 01.434-3.218l3.457-4.519a2.298 2.298 0 013.779 0zM13.5 4.5a1.5 1.5 0 013 0V6a1.5 1.5 0 01-3 0zm6 3A1.5 1.5 0 0018 9v1.5a1.5 1.5 0 003 0V9a1.5 1.5 0 00-1.5-1.5z" /></svg>);