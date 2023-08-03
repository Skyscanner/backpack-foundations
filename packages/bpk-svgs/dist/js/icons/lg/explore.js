import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm3.962 6.748l-3.038 7.9a.55.55 0 01-.932.159.535.535 0 01-.082-.151l-.97-2.467a2 2 0 00-1.13-1.13l-2.466-.97a.535.535 0 01-.15-.081.55.55 0 01.158-.931l7.9-3.04v.001a.55.55 0 01.71.71z" /></svg>);