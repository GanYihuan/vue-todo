// const doscLoader = require.resolve('./doc-loader')

module.exports = isDev => {
  return {
    // delete empty space
    preserveWhitepace: true,
    // css Packed into a separate file
    extractCSS: !isDev,
    cssModules: {
      localIdentName: isDev
        ? '[path]-[name]-[hash:base64:5]'
        : '[hash:base64:5]',
      camelCase: true
    }
    // hotReload: false, // 根据环境变量生成
    // loaders: {
    //   'docs': doscLoader
    // }
    // babel loader before handle
    // preLoader: {
    // }
  }
}
