const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#00a3c8',
              '@secondary-color': '#338f9f',
              '@body-textcolor': '#a6a6a6',
              '@primary-font': 'opensans-regular, sans-serif',
              '@primary-font-bold': 'opensans-bold, sans-serif',
              '@secondary-font': 'alice-regular, sans-serif',
              '@secondary-font-bold': 'bebasneue-bold, sans-serif',

            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};