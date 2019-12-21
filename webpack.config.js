const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'node',
  entry: {
    cli: './src/cli.js',
    core: './src/parser.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }),
  ],
};