import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M23.258 9.093A.925.925 0 0024 8.25V4.5a3 3 0 00-3-3H3a3 3 0 00-3 3v3.75a.925.925 0 00.742.843 3.001 3.001 0 012.162 3.652 3.001 3.001 0 01-2.162 2.162.925.925 0 00-.742.843v3.75a3 3 0 003 3h18a3 3 0 003-3v-3.75a.925.925 0 00-.742-.843 3.001 3.001 0 010-5.814zM9.653 6.025a.843.843 0 01.878.312l2.583 1.943a.45.45 0 01-.36.72h-2.5a.45.45 0 01-.436-.34L9.04 7.046a.842.842 0 01.613-1.02zM15.75 13.5h-1.532a1.5 1.5 0 00-1.35.845l-2.337 3.318a.842.842 0 01-1.49-.71l1.098-2.894a.45.45 0 00-.437-.559H8.03l-.532 1.063a.79.79 0 01-1.473-.545L6.529 12l-.505-2.018a.79.79 0 011.473-.545l.532 1.063h7.721c1.5 0 2.25.672 2.25 1.5s-.75 1.5-2.25 1.5z" /></svg>);