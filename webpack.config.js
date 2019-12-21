const path = require('path')
const webpack = require('webpack')

const Default = () => {
  return {
    devtool: 'source-map',
    output: {
      libraryTarget: 'umd',
      library: ["Wenyan", "[name]"],
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]/index.min.js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
  }
};

const Cli = {
  ...Default(),
  target: 'node',
  entry: {
    cli: './src/cli.js',
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#!/usr/bin/env node',
      raw: true,
    }),
  ],
}

const Core = {
  ...Default(),
  entry: {
    core: './src/parser.js',
  }
}

Core.output.library = 'Wenyan'

const Utils = {
  ...Default(),
  entry: {
    render: './src/render.js',
    highlighter: './src/highlight.js',
  }
}

module.exports = [Cli, Core, Utils]