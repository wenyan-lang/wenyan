const path = require('path')
const webpack = require('webpack')

const Default = () => {
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
          test: /\.wy$/i,
          use: 'raw-loader',
        },
      ],
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
  mode: "development",
  optimization: {
		minimize: false,
	},
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