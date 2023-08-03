import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M9.882 7.852L9.49 5.986a.498.498 0 01.623-.575l1.353.357a1.004 1.004 0 01.496.303l2.303 2.567a.494.494 0 01-.508.802l-3.147-.83a1 1 0 01-.728-.758z" /><path d="M3.05 4.542a1.01 1.01 0 00-.602-.441l-.316-.083a.498.498 0 00-.622.576l.835 3.965a3.413 3.413 0 002.236 2.55l4.526 1.194a.492.492 0 01.297.742l-3.78 5.854a.492.492 0 00.297.742l1.233.326a1.02 1.02 0 00.948-.23l6.623-5.51a1.424 1.424 0 011.102-.15l5.615 1.48c.538.143 1.117-.18 1.052-.721-.172-1.424-1.596-2.49-3.196-2.911l-12.77-3.37a3.031 3.031 0 01-1.8-1.322L3.05 4.543z" /><path d="M15.913 18.189a1.51 1.51 0 001.85-1.045 1.484 1.484 0 00-1.072-1.817 1.51 1.51 0 00-1.85 1.045 1.484 1.484 0 001.072 1.817z" /></svg>);