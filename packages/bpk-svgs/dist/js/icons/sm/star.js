import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M7.925 8.03a1.05 1.05 0 00.793-.591l2.576-5.478a.771.771 0 011.412 0l2.576 5.478a1.048 1.048 0 00.793.59l5.75.87a.835.835 0 01.437 1.407l-4.188 4.274a1.05 1.05 0 00-.287.905l.99 6.05a.795.795 0 01-1.141.869l-5.13-2.83a1.05 1.05 0 00-1.013 0l-5.13 2.83a.795.795 0 01-1.141-.87l.995-6.05a1.05 1.05 0 00-.286-.904l-4.192-4.273A.834.834 0 012.175 8.9z" /></svg>);