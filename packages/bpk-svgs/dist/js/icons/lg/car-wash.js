import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17 4.5a1 1 0 10-1-1 1 1 0 001 1zM15 6a1.5 1.5 0 11-1.5-1.5A1.5 1.5 0 0115 6zm4 3.5a2 2 0 10-2-2 2 2 0 002 2zm5 6.61v1c0 1 0 2.5-1 2.5h-.501a.559.559 0 01-.534-.5 2.89 2.89 0 00-2.97-2.5 2.872 2.872 0 00-2.97 2.5c-.036.274-.256.39-.532.39H8.72a.771.771 0 01-.807-.618 2.896 2.896 0 00-2.93-2.272 2.873 2.873 0 00-2.962 2.457.624.624 0 01-.584.541h-.03a.541.541 0 01-.09-.002c-.985.003-1.244-1.625-1.312-2.482a1.716 1.716 0 01.225-.966l1.658-2.997A1.297 1.297 0 013 12.5h11c1 0 .88-.79.194-1.288a6.749 6.749 0 00-1.596-.924 8.646 8.646 0 00-3.061-.504 14.726 14.726 0 00-3.226.386c-1.39.31-3.24.884-4.401 1.284a.547.547 0 01-.69-.377l-.003-.012a.626.626 0 01.334-.781 31.455 31.455 0 014.52-1.406A15.214 15.214 0 019.393 8.5h.1a10.034 10.034 0 013.498.543 16.858 16.858 0 014.05 2.904 1.13 1.13 0 00.668.287 12.66 12.66 0 014.79 1.376 2.75 2.75 0 011.5 2.5z" /><path d="M6.986 19.5a2 2 0 01-2 2h-.002a2 2 0 112.002-2.002zm12.01 2a2 2 0 10-2-2 2 2 0 002 2z" /></svg>);