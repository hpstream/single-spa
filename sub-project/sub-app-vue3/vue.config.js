module.exports = {
  publicPath: "http://localhost:8082/",
  configureWebpack: {
    mode: 'development',
    output: {
      library: "singleVue3",
      libraryTarget: "window",
      filename: 'singleVue3.js',
      chunkFilename: '[name].chunk.js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 3000000,
      }
    }
  },
  devServer: {
    contentBase: './',
    compress: true,
  }
}
