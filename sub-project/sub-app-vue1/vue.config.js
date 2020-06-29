module.exports = {
  publicPath: "/",
  configureWebpack: {
    output: {
      library: "singleVue1",
      libraryTarget: "umd",
      filename: 'singleVue1.js',
      chunkFilename: '[name].chunk.js',
    }
  },
  devServer: {
    contentBase: './',
    compress: true,
  }
}
