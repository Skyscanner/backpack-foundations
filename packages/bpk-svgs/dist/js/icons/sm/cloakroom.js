import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M21.295 16.926L15.04 12.08 15 12h-.064l-1.137-.88a2.997 2.997 0 00-.299-.205v-.406a.453.453 0 01.085-.127 2.08 2.08 0 01.574-.433A4.5 4.5 0 107.5 6a1.5 1.5 0 103 0 1.5 1.5 0 112.218 1.318 5.053 5.053 0 00-1.41 1.11A3.173 3.173 0 0010.5 10.5v.415a3.287 3.287 0 00-.299.204L9.064 12H9l-.022.067-6.273 4.859a3.114 3.114 0 001.8 5.574h14.99a3.113 3.113 0 001.8-5.574zm-2.238 2.478H4.943a.15.15 0 01-.093-.27l3.28-2.54a.45.45 0 01.276-.094h7.188a.45.45 0 01.275.094l3.28 2.54a.15.15 0 01-.092.27z" /></svg>);