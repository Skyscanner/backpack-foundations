import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M11.33 2.408a1.5 1.5 0 012.012.671l.829 1.66a3 3 0 01-1.342 4.023.354.354 0 00-.159.475l.001.001.67 1.341a1.5 1.5 0 11-2.673 1.363l-.01-.02-.829-1.66a3 3 0 011.342-4.024.354.354 0 00.159-.475h-.001l-.67-1.342a1.5 1.5 0 01.67-2.013zm8.343 2.957a1.5 1.5 0 011.962.808l.413.993a2.513 2.513 0 01-.308 2.473.924.924 0 00-.162.9l.057.134a1.5 1.5 0 01-2.77 1.154l-.413-.993a2.513 2.513 0 01.308-2.473.924.924 0 00.162-.899l-.057-.135a1.5 1.5 0 01.807-1.961zm-14.538.808a1.5 1.5 0 00-2.77 1.154l.057.135a.926.926 0 01-.162.9 2.506 2.506 0 00-.308 2.472l.413.993a1.5 1.5 0 102.77-1.154l-.057-.135a.926.926 0 01.162-.9 2.506 2.506 0 00.308-2.472z" /><path d="M2.385 15.07a.727.727 0 00-.885.66v1.22a4.735 4.735 0 004.667 4.8h11.666a4.735 4.735 0 004.667-4.8v-1.22a.727.727 0 00-.885-.66 4.405 4.405 0 01-.865.08 3.754 3.754 0 01-1.873-.447 4.061 4.061 0 01-1.118-.958c-.093-.11-.186-.224-.268-.327l-.1-.124a3.703 3.703 0 00-.293-.33.59.59 0 00-.431-.214.842.842 0 00-.579.24 3.956 3.956 0 00-.34.334l-.113.123c-.094.103-.2.218-.306.327a4.45 4.45 0 01-1.256.943A4.645 4.645 0 0112 15.15a4.645 4.645 0 01-2.073-.433 4.45 4.45 0 01-1.256-.943q-.155-.16-.305-.326l-.115-.124a3.965 3.965 0 00-.34-.335.842.842 0 00-.578-.239.588.588 0 00-.43.213 3.718 3.718 0 00-.295.331l-.099.124c-.083.103-.175.217-.268.327a4.061 4.061 0 01-1.118.958 3.768 3.768 0 01-1.873.447 4.454 4.454 0 01-.865-.08z" /></svg>);