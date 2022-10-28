import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M1.246 8.85a.853.853 0 01.089-1.278A17.487 17.487 0 0112 4a17.487 17.487 0 0110.665 3.572.854.854 0 01.09 1.278L21.74 9.92a1.029 1.029 0 01-1.34.101A14.356 14.356 0 0012 7.29a13.908 13.908 0 00-8.395 2.703 1.036 1.036 0 01-1.363-.089zm4.805 3.37a.827.827 0 00-.113 1.33l.928.873a1.065 1.065 0 001.245.118 7.788 7.788 0 017.778-.001 1.065 1.065 0 001.245-.118l.928-.872a.829.829 0 00-.113-1.332 11.607 11.607 0 00-11.898.001zm4.395 5.297a.717.717 0 00-.117 1.16l.968 1.024a.976.976 0 001.38.026l.026-.026.968-1.024a.717.717 0 00-.117-1.16 3.525 3.525 0 00-3.108 0z" /></svg>);