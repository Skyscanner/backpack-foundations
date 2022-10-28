import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M22.262 10.306a.834.834 0 00-.437-1.405l-5.75-.87a1.05 1.05 0 01-.793-.592L12.706 1.96a.771.771 0 00-1.412 0L8.718 7.439a1.05 1.05 0 01-.793.59l-5.75.87a.835.835 0 00-.436 1.408L5.93 14.58a1.052 1.052 0 01.286.906l-.995 6.05a.795.795 0 001.142.868l5.129-2.83a1.05 1.05 0 011.014 0l5.129 2.83a.795.795 0 001.142-.868l-.99-6.051a1.05 1.05 0 01.286-.905zM15.93 12.48a4.05 4.05 0 00-1.104 3.488l.262 1.604-1.133-.625a4.05 4.05 0 00-3.912 0l-1.13.623.264-1.598a4.05 4.05 0 00-1.105-3.494l-1.228-1.251 1.529-.232a4.05 4.05 0 003.059-2.28L12 7.51l.566 1.206a4.05 4.05 0 003.06 2.28l1.532.232z" /></svg>);