import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M18.051 1.744a.75.75 0 01.462-.955l2.25-.75a.75.75 0 01.474 1.423l-2.25.75a.75.75 0 01-.936-.468zM21.75 3h-3a.75.75 0 000 1.5h3a.75.75 0 000-1.5zm-.513 3.039l-2.25-.75a.75.75 0 00-.474 1.423l2.25.75a.75.75 0 00.474-1.423zM18 17.604V21a3 3 0 01-3 3H4.5a3 3 0 01-3-3v-3.845a3 3 0 011.08-2.305l2.34-1.95A3 3 0 006 10.595V8.25a.925.925 0 00-.742-.843A3.001 3.001 0 013 4.5V3a3 3 0 013-3h8.25a.75.75 0 01.75.75.75.75 0 00.75.75.75.75 0 01.75.75v3a.75.75 0 01-.75.75.75.75 0 00-.75.75.75.75 0 01-.75.75h-.75a.64.64 0 00-.668.744 7.34 7.34 0 001.447 2.943.446.446 0 01-.362.743 5.026 5.026 0 01-3.121-1.48.146.146 0 00-.26.102 3.082 3.082 0 001.622 2.277l4.184 2.092A3 3 0 0118 17.604zm-4.5 1.146a.75.75 0 00-.75-.75H10.5v-2.25a.75.75 0 00-1.5 0V18H6.75a.75.75 0 000 1.5H9v2.25a.75.75 0 001.5 0V19.5h2.25a.75.75 0 00.75-.75z" /></svg>);