module.exports = {
  "stories": [
    "../stories/tokens/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-a11y',
    '@storybook/addon-viewport'
  ],
  "framework": {
    name: "@storybook/html-webpack5",
    options: {}
  }
}