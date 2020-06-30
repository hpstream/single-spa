module.exports = {
  publicPath: "./",
  configureWebpack: {
    mode: 'development',
    output: {
      library: "singleVue1",
      libraryTarget: "window",
      filename: 'singleVue1.js',
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
