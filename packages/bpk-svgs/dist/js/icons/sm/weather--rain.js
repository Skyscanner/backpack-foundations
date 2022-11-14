import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M14.25 3.745a.262.262 0 00.236-.397A5.622 5.622 0 004.29 5.003a1.476 1.476 0 01-1.092 1.04 4.166 4.166 0 00-.52 7.944.294.294 0 00.386-.247 5.665 5.665 0 013.851-4.534.874.874 0 00.562-.551 7.153 7.153 0 016.773-4.91z" /><path d="M17.073 18.745h-1.146l-1.835 3.67a1.5 1.5 0 01-2.684-1.34l1.165-2.33h-1.146l-1.835 3.67a1.5 1.5 0 01-2.694-1.32l.01-.02 1.181-2.362a4.16 4.16 0 01-.391-8.168 1.473 1.473 0 001.092-1.04 5.626 5.626 0 0110.654-.79 1.373 1.373 0 00.96.799 4.687 4.687 0 01.091 9.094l-1.903 3.808a1.5 1.5 0 11-2.684-1.342z" /></svg>);