import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M13.5 2.382a.656.656 0 01.286-.601A2.632 2.632 0 0115 1.5a2.563 2.563 0 011.196.28.685.685 0 01.304.62v2.262A1.377 1.377 0 0115 6a1.377 1.377 0 01-1.5-1.338zM16.25 22.5a1.338 1.338 0 01-1.148-1.851 6.746 6.746 0 00-.001-5.301 1.335 1.335 0 011.146-1.848 3.134 3.134 0 013.253 3v5a1.045 1.045 0 01-1.084 1zm-7.468-9.464a.957.957 0 00.234.313.82.82 0 00.249.159 4.5 4.5 0 11-2.958.887 1.631 1.631 0 00.404-1.357l-.733-3.85a.73.73 0 01.317-.737c.192-.135.41-.307.65-.496 1.105-.87 2.683-2.11 4.431-1.94a2.125 2.125 0 011.686 2.81l-.843 2.568a1.1 1.1 0 01-1.284.708 7.04 7.04 0 00-1.686-.144.596.596 0 00-.532.726z" /></svg>);