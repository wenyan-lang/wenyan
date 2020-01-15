const path = require('path')

module.exports = () => {
  return {
    devtool: 'source-map',
    output: {
      globalObject: '(typeof self !== "undefined" ? self : this)', // make it works for both node and browser
      libraryTarget: 'umd2',
      library: ["Wenyan", "[name]"],
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]/index.min.js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.wy$/i,
          use: 'raw-loader',
        },
      ],
    },
  }
};