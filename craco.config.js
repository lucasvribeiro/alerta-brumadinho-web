const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#338221",
              "@error-color": "#ff4d4d",
              "@border-radius-base": "6px"
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};