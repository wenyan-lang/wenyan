const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')

const Cli = {
  ...baseConfig(),
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
  ...baseConfig(),
  entry: {
    core: './src/parser.ts',
  }
}

Core.output.library = 'Wenyan'

const Utils = {
  ...baseConfig(),
  entry: {
    render: './src/render.js',
    runtime: './src/browser_runtime.js',
  }
}

module.exports = [Cli, Core, Utils]