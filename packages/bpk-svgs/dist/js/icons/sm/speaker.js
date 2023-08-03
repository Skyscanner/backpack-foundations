import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M14.831.424C16.06-.53 18 .232 18 1.67v20.66c0 1.438-1.941 2.2-3.169 1.246l-6.84-5.325a1.24 1.24 0 00-.76-.253H3.427a3.235 3.235 0 01-3.427-3V9a3.235 3.235 0 013.427-3H7.23a1.248 1.248 0 00.76-.252L14.83.424zM19.5 8.25a.75.75 0 011.5 0v7.5a.75.75 0 01-1.5 0zm3.75-3.75a.75.75 0 00-.75.75v13.5a.75.75 0 001.5 0V5.25a.75.75 0 00-.75-.75z" /></svg>);