export default {
  disableCSSModules: true,
  extraBabelPlugins:[[
    "import",
    {
      "libraryName": "@lugia/lugia-web",
      "libraryDirectory": "dist"
    }
  ]]
};
