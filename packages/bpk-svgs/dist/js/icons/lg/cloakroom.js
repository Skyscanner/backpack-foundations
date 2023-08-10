import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M7.5 6.39A4.412 4.412 0 0112 2a4.412 4.412 0 014.5 4.39 4.692 4.692 0 01-1.63 3.482A6.033 6.033 0 0113 11.03v1.703a1 1 0 01-2 0v-2.419a.995.995 0 01.858-.986 3.56 3.56 0 001.647-.882 2.771 2.771 0 00.994-2.055A2.432 2.432 0 0012 3.952a2.432 2.432 0 00-2.5 2.44 1 1 0 01-2-.001z" /><path d="M12 13.783l7.887 6.25a.63.63 0 01-.147.016H4.26c-.05 0-.1-.005-.148-.016zm0-2.515L2.735 18.61C1.22 19.813 2.202 22 4.26 22h15.48c2.057 0 3.041-2.187 1.524-3.39z" /><path d="M5.844 16.146L12 11.268l6.155 4.878z" /></svg>);