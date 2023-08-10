import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M13.664 1.586a1.126 1.126 0 01.66 1.312l-.051.158-.576 1.39a1.125 1.125 0 01-2.131-.704l.052-.158.576-1.39a1.125 1.125 0 011.47-.608zM7.202 2.2l-.068-.135a1.125 1.125 0 00-2.011.998l.575 1.39.068.136a1.125 1.125 0 002.01-.999zM1.41 6.543l.158.053 1.39.575a1.125 1.125 0 01-.703 2.131l-.16-.052-1.39-.576a1.125 1.125 0 01.704-2.13zm2.14 7.203a1.125 1.125 0 01-.472 1.402l-.137.068-1.39.576a1.125 1.125 0 01-.997-2.01l.137-.069 1.39-.575a1.125 1.125 0 011.47.608zm3.923-1.336a.873.873 0 01-.562.55 5.65 5.65 0 00-1.295.611.447.447 0 01-.657-.162 5.25 5.25 0 017.788-6.467.432.432 0 01-.205.764 7.189 7.189 0 00-5.07 4.704zM19.379 22.5a4.68 4.68 0 001.022-9.23 1.377 1.377 0 01-.96-.799 5.626 5.626 0 00-10.654.787A1.476 1.476 0 017.695 14.3a4.157 4.157 0 00.907 8.201z" /></svg>);