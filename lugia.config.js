let config = require('./lugia.config.json');

if (process.env.NODE_ENV === 'development') {
  config = {
    publicPath: '/'
  };
}
export default {
  ...config,
  disableCSSModules: true,
  cssModulesWithAffix: true,
  extraBabelIncludes: [/decamelize/],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: '@lugia/lugia-web',
        libraryDirectory: 'dist'
      }
    ]
  ],
  applyWebpack(webpackConfig, { webpack, mega }) {
    return webpackConfig;
  },
  dllDependenciesExcludes: ['@lugia/lugia-web']
};
