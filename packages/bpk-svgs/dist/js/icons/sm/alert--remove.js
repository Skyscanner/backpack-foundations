import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M22.06 3.31l-3.412 3.413c-.047.048.102-.102 0 0L4.061 21.311a1.5 1.5 0 01-2.122-2.122l1.218-1.218a.33.33 0 00.053-.38 2.049 2.049 0 01.01-1.826l.51-1.025a10.35 10.35 0 001.084-4.612v-.66a7.18 7.18 0 0111.891-5.456.31.31 0 00.422-.01l2.812-2.813a1.5 1.5 0 012.122 2.122zm-2.802 8.032a.318.318 0 00-.534-.195l-7.09 7.09a.3.3 0 00.212.513h7.098a2.062 2.062 0 001.837-2.985l-.51-1.025a10.345 10.345 0 01-1.013-3.398zM9.831 20.25a1.02 1.02 0 00-.755 1.44 2.243 2.243 0 001.917 1.56h2a2.258 2.258 0 001.93-1.56 1.02 1.02 0 00-.755-1.44H9.831z" /></svg>);