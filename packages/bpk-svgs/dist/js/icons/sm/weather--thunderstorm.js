import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M14.486 2.601a.262.262 0 01-.236.397 7.153 7.153 0 00-6.773 4.91.874.874 0 01-.562.551 5.665 5.665 0 00-3.851 4.534.294.294 0 01-.386.247 4.165 4.165 0 01.52-7.942 1.473 1.473 0 001.092-1.04 5.621 5.621 0 0110.196-1.657z" /><path d="M22.087 16.672c-.054.157.139.34.265.232a4.695 4.695 0 00-1.948-8.137 1.376 1.376 0 01-.96-.798 5.626 5.626 0 00-10.654.787 1.476 1.476 0 01-1.092 1.041 4.167 4.167 0 00-.564 7.927.326.326 0 00.409-.358 2.212 2.212 0 01.48-1.508l5.958-7.582A2.25 2.25 0 0118 9.666v3.382a.45.45 0 00.45.45h1.36a2.405 2.405 0 012.277 3.174z" /><path d="M15.175 9.27l-6 7.5A.75.75 0 009.751 18h3a.75.75 0 01.75.75v4.5a.75.75 0 001.327.48l6-7.5a.75.75 0 00-.577-1.23h-3a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-1.326-.48z" /></svg>);