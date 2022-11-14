import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M7.881 2.848l1.297 1.579a.967.967 0 001.029.324l3.201-.95c.49-.145.518-.884.04-1.054l-3.341-1.192a.953.953 0 00-.593-.015l-1.376.408c-.368.11-.507.596-.257.9z" /><path d="M.704 4.948a.953.953 0 01.757.09l2.851 1.658c.69.4 1.5.498 2.264.271l12.988-3.853c1.628-.482 3.428-.249 4.305 1.027.334.485-.013 1.117-.56 1.28l-5.712 1.694c-.325.096-.78.415-.896.757l-3.039 5.987a1.086 1.086 0 01-.72.749l-1.253.372c-.335.099-.657-.178-.64-.55l.352-4.738c.017-.371-.305-.648-.64-.55L6.159 10.51c-1.146.336-2.504-.276-3.273-1.212L.127 5.944c-.25-.304-.112-.79.255-.9l.322-.096z" /><path d="M3 19.5a1.5 1.5 0 010-3h14.379l-.44-.44a1.5 1.5 0 012.122-2.12l3 3a1.5 1.5 0 010 2.12l-3 3a1.5 1.5 0 01-2.122-2.12l.44-.44H3z" /></svg>);