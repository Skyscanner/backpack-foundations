import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M4.5 5.625A4.125 4.125 0 0112.595 4.5h7.853a1.41 1.41 0 011.262.78 4.125 4.125 0 010 3.69l-.079.158a1.125 1.125 0 11-2.012-1.006l.079-.158c.19-.38.243-.807.16-1.214h-2.23a4.124 4.124 0 01-.418 2.22l-.079.158a1.125 1.125 0 11-2.012-1.006l.079-.158c.19-.38.243-.807.16-1.214h-2.763A4.127 4.127 0 014.5 5.625zM8.625 3.75a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75zM3.45 22.5h-2.4C.47 22.5 0 22.03 0 21.45v-6.9c0-.58.47-1.05 1.05-1.05h2.4c.58 0 1.05.47 1.05 1.05v6.9c0 .58-.47 1.05-1.05 1.05zM6 15a1.5 1.5 0 011.5-1.5h7.146c.233 0 .462.054.67.158l2.172 1.086a.927.927 0 01-.415 1.756h-3.198a.375.375 0 000 .75h2.381a1.5 1.5 0 00.475-.077l5.695-1.898a1 1 0 01.942 1.73l-6.457 5.166a1.5 1.5 0 01-.937.329H7.5A1.5 1.5 0 016 21v-6z" /></svg>);