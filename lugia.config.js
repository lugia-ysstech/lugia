const config = require('./lugia.config.json');

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
