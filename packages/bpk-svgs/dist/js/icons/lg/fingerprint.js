import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M10.984 2.967a1 1 0 01-.804 1.164A8.003 8.003 0 003.63 12c0 .871-.172 1.704-.484 2.466a1 1 0 11-1.85-.759c.215-.525.334-1.1.334-1.707 0-4.905 3.531-8.984 8.19-9.836a1 1 0 011.164.803zm2.051.086a1 1 0 011.228-.703C18.508 3.506 21.63 7.387 21.63 12v.5a24.56 24.56 0 01-.674 5.733 1 1 0 11-1.945-.466 22.56 22.56 0 00.62-5.267V12a8.004 8.004 0 00-5.894-7.72 1 1 0 01-.702-1.227zM11.63 7.5a4.502 4.502 0 00-4.193 2.864 1 1 0 01-1.863-.728 6.502 6.502 0 0112.113 0 1 1 0 01-1.863.728A4.502 4.502 0 0011.63 7.5zm0 3.5a1 1 0 00-1 1v.5c0 1.616-.284 3.168-.807 4.607a13.468 13.468 0 01-2.32 4.033 1 1 0 01-1.536-1.28 11.542 11.542 0 001.976-3.435c.445-1.224.687-2.545.687-3.925V12a3 3 0 116 0v.5a17.416 17.416 0 01-3.128 9.987 1 1 0 01-1.64-1.143 15.414 15.414 0 002.77-8.844V12a1 1 0 00-1.002-1zm-5.5 2.022a1 1 0 01.754 1.196 9.973 9.973 0 01-2.207 4.345 1 1 0 11-1.509-1.314 7.973 7.973 0 001.766-3.473 1 1 0 011.196-.754zM17.149 13a1 1 0 01.923 1.071 20.89 20.89 0 01-2.214 7.94 1 1 0 11-1.783-.907 18.894 18.894 0 002.003-7.18 1 1 0 011.07-.924z" /></svg>);