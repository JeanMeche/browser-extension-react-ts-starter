const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // to fix the issue with importing api.ts from the parent project
      // https://stackoverflow.com/a/60353355/884123
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) =>
          constructor && constructor.name === 'ModuleScopePlugin'
      );
      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);

      // 2nd fix necessary for the same problem
      // https://stackoverflow.com/a/67228720/884123
      delete webpackConfig.module.rules[1].oneOf[2].include;

      // build output app to parent dist for the popup.js
      webpackConfig.output.path = path.resolve('../../dist/popup');

      // To remove the absolute path to the scripts in the index.html
      webpackConfig.output.publicPath = '';

      return webpackConfig;
    },
  },
  devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    devServerConfig.writeToDisk = true;
    return devServerConfig;
  },
};
