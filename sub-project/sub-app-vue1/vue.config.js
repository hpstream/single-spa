module.exports = {
  publicPath: "./",
  configureWebpack: {
    mode: 'development',
    output: {
      library: "singleVue1",
      libraryTarget: "window",
      filename: 'singleVue1.js',
      chunkFilename: '[name].chunk.js',
    }
  },
  devServer: {
    contentBase: './',
    compress: true,
  }
}
