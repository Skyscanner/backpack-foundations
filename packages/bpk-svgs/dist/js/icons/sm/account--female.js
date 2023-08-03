import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M8.756 3.943c.909-3.147 3.568-2.792 4.541-1.5.973-.355 1.816-.132 2.27 1.706a5.462 5.462 0 01.08 2.109 11.513 11.513 0 00-.08 1.245 4.72 4.72 0 00.745 3.069c.197.2.28.575.046.712a7.069 7.069 0 01-3.223.716h-2.27a7.082 7.082 0 01-3.223-.716c-.234-.137-.15-.513.046-.713a4.715 4.715 0 00.744-3.068 13.736 13.736 0 01.324-3.56zM12 15a17.3 17.3 0 00-7.855 1.865A2.073 2.073 0 003 18.75v.75a3.226 3.226 0 003 3h12a3.226 3.226 0 003-3v-.75a2.002 2.002 0 00-1.107-1.883A17.608 17.608 0 0012 15z" /></svg>);