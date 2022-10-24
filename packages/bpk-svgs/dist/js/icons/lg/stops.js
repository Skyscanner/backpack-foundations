import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12.506 6.5a2 2 0 11-2-2 2 2 0 012 2zm-5.134.57a1 1 0 01-.366 1.366 6.997 6.997 0 00-3.5 6.064v4a1 1 0 01-2 0v-4a8.997 8.997 0 014.5-7.795 1 1 0 011.366.365zm6.268 0a1 1 0 011.366-.365h.001a8.997 8.997 0 014.5 7.795v1.537l1.292-1.244a1 1 0 011.414 1.414L19.17 18.91a1 1 0 01-1.328 0L14.8 16.207a1 1 0 011.414-1.414l1.293 1.244V14.5a6.997 6.997 0 00-3.5-6.064 1 1 0 01-.366-1.366z" /></svg>);