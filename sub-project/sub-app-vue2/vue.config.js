module.exports = {
  publicPath: "/",
  configureWebpack: {
    output: {
      library: "singleVue2",
      libraryTarget: "umd",
      filename: 'singleVue2.js',
      chunkFilename: '[name].chunk.js',
    }
  },
  devServer: {
    contentBase: './',
    compress: true,
  }
}
