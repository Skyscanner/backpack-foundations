import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12.332 3.417a5.23 5.23 0 017.16 0 4.766 4.766 0 01.22 6.737q-.106.113-.22.22l-7.226 6.885a3.116 3.116 0 01-4.27 0 2.883 2.883 0 01-.128-4.075q.062-.066.128-.128l4.336-4.13a1 1 0 011.38 1.448l-4.336 4.13a.884.884 0 00-.058 1.25q.028.03.058.058a1.116 1.116 0 001.51 0l7.227-6.886a2.766 2.766 0 000-4.06 3.232 3.232 0 00-4.4 0L6.485 11.75a4.65 4.65 0 000 6.814 5.349 5.349 0 007.291 0l4.336-4.13a1 1 0 011.38 1.447l-4.336 4.13a7.347 7.347 0 01-10.05 0 6.65 6.65 0 010-9.71z" /></svg>);