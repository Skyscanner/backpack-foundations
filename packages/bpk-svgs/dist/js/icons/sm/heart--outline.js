import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M20.811 4.036a4.904 4.904 0 00-6.952-.625l-1.18 1.03a1.025 1.025 0 01-1.357 0l-1.18-1.03a4.904 4.904 0 00-6.953.625 6.11 6.11 0 00-1.458 5.859c.898 4.03 5.543 8.553 9.051 11.415a1.905 1.905 0 002.436 0c3.508-2.862 8.153-7.384 9.05-11.415a6.106 6.106 0 00-1.457-5.86zM19.393 9.04l-.03.1-.022.1a12.556 12.556 0 01-2.894 4.845A40.097 40.097 0 0112 18.422a40.013 40.013 0 01-4.447-4.336A12.55 12.55 0 014.66 9.242l-.022-.101-.03-.1a3.11 3.11 0 01.742-2.922 2.47 2.47 0 011.458-.861 2.136 2.136 0 011.464.503l1.08.94a4.025 4.025 0 005.298 0l1.08-.94a2.136 2.136 0 011.464-.503 2.47 2.47 0 011.458.86 3.114 3.114 0 01.742 2.923z" /></svg>);