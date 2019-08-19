export default {
  disableCSSModules: true,
  cssModulesWithAffix: true,
  publicPath: 'https://lugia.oss-cn-beijing.aliyuncs.com/',
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
