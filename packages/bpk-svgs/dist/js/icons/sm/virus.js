import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M14.1 3.6a2.1 2.1 0 10-3.616 1.453 1.437 1.437 0 01.466.96 1.187 1.187 0 01-.808 1.075q-.145.055-.286.118a1.212 1.212 0 01-1.358-.193l-.38-.38A1.297 1.297 0 017.8 5.7a2.1 2.1 0 10-2.1 2.1 1.294 1.294 0 01.933.318l.38.38a1.212 1.212 0 01.193 1.358c-.04.089-.077.18-.112.27a1.214 1.214 0 01-1.097.824h-.578a2.101 2.101 0 100 2.1h.578a1.214 1.214 0 011.097.823c.035.092.073.182.112.271a1.212 1.212 0 01-.193 1.358l-.38.38a1.297 1.297 0 01-.933.318 2.1 2.1 0 102.1 2.1 1.294 1.294 0 01.318-.933l.38-.38a1.212 1.212 0 011.358-.193c.094.042.19.081.286.118a1.187 1.187 0 01.808 1.075 1.437 1.437 0 01-.466.96 2.1 2.1 0 103.032 0 1.437 1.437 0 01-.466-.96 1.187 1.187 0 01.808-1.075c.097-.037.192-.076.286-.118a1.212 1.212 0 011.358.193l.38.38a1.295 1.295 0 01.318.933 2.1 2.1 0 102.1-2.1 1.294 1.294 0 01-.933-.318l-.38-.38a1.212 1.212 0 01-.193-1.358c.042-.094.08-.19.118-.286a1.187 1.187 0 011.075-.808 1.437 1.437 0 01.96.466 2.1 2.1 0 100-3.032 1.437 1.437 0 01-.96.466 1.187 1.187 0 01-1.075-.808q-.055-.145-.118-.286a1.212 1.212 0 01.193-1.358l.38-.38A1.295 1.295 0 0118.3 7.8a2.1 2.1 0 10-2.1-2.1 1.294 1.294 0 01-.318.933l-.38.38a1.212 1.212 0 01-1.358.193q-.141-.063-.286-.118a1.187 1.187 0 01-.808-1.075 1.437 1.437 0 01.466-.96A2.09 2.09 0 0014.1 3.6z" /></svg>);