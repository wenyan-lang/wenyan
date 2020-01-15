const webpack = require('webpack')
const path = require('path')
const {baseConfig} = require('./webpack.base.config')

const makeConfig = (entry, filename, entryName) => {
  const config = {
    ...baseConfig(),
    target: 'node',
    entry: entry,
    devtool: undefined,
    mode: "development",
    optimization: {
      minimize: false,
    },
  }
  config.output.filename = filename
  config.output.path = path.resolve(__dirname, 'static')
  config.output.library = entryName
  return config
}

const core = makeConfig('./src/parser.ts', 'dist/core.js', 'Wenyan')
const examples = makeConfig('./tools/examples.js', 'dist/examples.js', 'Examples')
const highlighter = makeConfig('./src/highlight.js', 'dist/highlight.js', 'Highlighter')
const render = makeConfig('./src/render.ts', 'dist/render.js', 'Render')

module.exports = [core, examples, highlighter, render]