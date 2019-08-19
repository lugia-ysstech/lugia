export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  publicPath: '/',
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
