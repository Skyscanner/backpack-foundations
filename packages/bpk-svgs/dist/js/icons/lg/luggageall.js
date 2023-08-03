import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M3 18a3 3 0 002.502 2.959c.272.045.498-.183.498-.459v-13c0-.276-.226-.504-.498-.459A3 3 0 003 10v8zm4 4a1 1 0 102 0v-1h6v1a1 1 0 102 0V4.01c0-.37-.102-.79-.383-1.15C16.06 2.143 14.5 1 12 1S7.846 2.16 7.306 2.936A1.78 1.78 0 007 3.958V22zm8-17.607V7H9V4.348c0-.221.07-.44.228-.594C9.612 3.383 10.5 3 12 3c1.5 0 2.358.378 2.762.776a.857.857 0 01.238.617zm3.498 16.566c-.273.045-.498-.183-.498-.459v-13c0-.276.226-.504.498-.459A3 3 0 0121 10v8a3 3 0 01-2.502 2.959z" /></svg>);