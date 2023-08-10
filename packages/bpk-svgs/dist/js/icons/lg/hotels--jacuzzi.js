import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12.143 4.286a1.143 1.143 0 000-2.286 1.143 1.143 0 000 2.286zM17 6.5A1.5 1.5 0 1115.5 5 1.5 1.5 0 0117 6.5zM10 10a2 2 0 10-2-2 2 2 0 002 2zm-7 3.982a.62.62 0 01.758-.55 3.88 3.88 0 00.742.068 3.285 3.285 0 001.605-.373 3.454 3.454 0 00.959-.798c.08-.091.159-.187.23-.273l.085-.102a3.13 3.13 0 01.252-.276A.51.51 0 018 11.5a.731.731 0 01.496.2 3.123 3.123 0 01.29.278c.032.032.064.067.099.104.08.085.17.18.261.272a3.828 3.828 0 001.077.785A4.07 4.07 0 0012 13.5a4.088 4.088 0 001.777-.36 3.812 3.812 0 001.077-.786c.09-.091.18-.187.262-.273l.097-.103a3.392 3.392 0 01.291-.278.731.731 0 01.496-.2.513.513 0 01.37.178 3.068 3.068 0 01.251.275l.085.103c.071.086.15.182.23.273a3.471 3.471 0 00.959.798 3.299 3.299 0 001.605.373 3.872 3.872 0 00.742-.068.62.62 0 01.758.55V18a4 4 0 01-4 4H7a4 4 0 01-4-4z" /></svg>);