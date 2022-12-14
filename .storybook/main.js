const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
      ],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
          "@styles": path.resolve(__dirname, '../src/styles/'),
          "@components": path.resolve(__dirname, '../src/components/'),
          "@stories": path.resolve(__dirname, '../src/stories/'),
          "@services": path.resolve(__dirname, '../src/services/'),
          "@pages": path.resolve(__dirname, '../pages/'),
        },
      },
    };
  }
}
