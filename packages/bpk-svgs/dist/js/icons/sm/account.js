import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9.572 2.082A1.384 1.384 0 009 3.33v5.897A2.792 2.792 0 0012 12a2.791 2.791 0 003-2.774v-5.86a1.435 1.435 0 00-.608-1.285A4.966 4.966 0 0012 1.5a5.122 5.122 0 00-2.428.582zM4.145 16.865A17.3 17.3 0 0112 15a17.608 17.608 0 017.893 1.867A2 2 0 0121 18.75v.75a3.226 3.226 0 01-3 3H6a3.226 3.226 0 01-3-3v-.75a2.073 2.073 0 011.145-1.885z" /></svg>);