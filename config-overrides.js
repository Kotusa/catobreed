// require react-app-rewired v. >= 2.0
const webpack = require('webpack');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addBabelPlugin,
  addBundleVisualizer,
  addWebpackAlias,
  addWebpackPlugin,
} = require('customize-cra');

const aliases = require('./aliases');

module.exports = override(
  // require babel-plugin-import
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  // require less && less-loader
  addLessLoader({
    javascriptEnabled: true,
  }),
  // require react-app-rewire-styled-components && styled-components
  addBabelPlugin(['styled-components', { displayName: true }]),
  // require webpack-bundle-analyzer
  (config) => {
    return process.env.NODE_ENV === 'production'
      ? addBundleVisualizer({
          analyzerMode: 'static',
          reportFilename: 'report.html',
        })(config)
      : config;
  },
  addWebpackAlias(aliases),
);
