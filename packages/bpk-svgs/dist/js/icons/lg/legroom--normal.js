import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M8 3a1 1 0 00-1 1v8c0 2 1 4 3.5 4H12c1.5 0 2 .5 2 2v1.5a1.326 1.326 0 001.5 1.5h3.665c.552 0 1.02-.473.762-.961A1.98 1.98 0 0018 19a.917.917 0 01-1-1v-2a3.037 3.037 0 00-2-3l-2.833-.677a1 1 0 01-.724-.855l-.697-6.454A2.277 2.277 0 008.628 3z" /><path d="M6 6a1 1 0 00-2 0v5.636a8.868 8.868 0 001.25 5.122C6.283 18.227 7.967 19 10.332 19H12a1 1 0 000-2h-1.667c-1.9 0-2.884-.592-3.449-1.394A6.968 6.968 0 016 11.636z" /></svg>);