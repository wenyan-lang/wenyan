const webpack = require('webpack')
const { baseConfig, defaultPlugins, DtsBundlePlugin } = require('./webpack.base.config')

const Cli = {
  ...baseConfig(),
  target: 'node',
  entry: {
    cli: './src/cli.ts',
  },
  plugins: [
    ...defaultPlugins(),
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
  },
  plugins: [
    ...defaultPlugins(),
    new DtsBundlePlugin({
      name: '@wenyan/core',
      baseDir: 'typings/src',
      main: 'typings/src/parser.d.ts',
      out: '../../dist/core/index.d.ts',
    })
  ]
}

Core.output.library = 'Wenyan'

const Utils = {
  ...baseConfig(),
  entry: {
    render: './src/render.ts',
    runtime: './src/browser_runtime.ts',
  }
}

module.exports = [Cli, Core, Utils]