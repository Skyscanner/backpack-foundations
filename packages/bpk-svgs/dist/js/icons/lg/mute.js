import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M5.44 16.49a.524.524 0 01-.053.666L2.5 20.043A1.03 1.03 0 003.957 21.5l3.205-3.205c.017.012-.016-.013 0 0l1.333-1.333c-.051-.035.017.012 0 0l1.517-1.517c-.019-.01.018.011 0 0L21.5 3.957A1.03 1.03 0 0020.043 2.5l-3.53 3.531A.3.3 0 0116 5.819V4.1C16 2.94 14.208 2 12 2c-2.21 0-4 .94-4 2.1v7.7a4.358 4.358 0 00.398 1.829.542.542 0 01-.095.611l-.814.815a.462.462 0 01-.743-.095A6.937 6.937 0 016 11.733C6 11.328 5.401 11 5 11s-1 .329-1 .733a8.382 8.382 0 001.44 4.757zm5.425 1.418a.524.524 0 00-.458.142l-.962.962a.285.285 0 00.115.48 7.43 7.43 0 00.987.216.524.524 0 01.453.512V21a1 1 0 002 0v-.78a.524.524 0 01.453-.511A7.844 7.844 0 0020 11.733c0-.405-.599-.733-1-.733s-1 .329-1 .733C18 15.373 15.609 18 12 18a6.846 6.846 0 01-1.135-.092z" /></svg>);