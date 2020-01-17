const webpack = require('webpack')
const path = require('path')
const { baseConfig } = require('./webpack.base.config')

const makeConfig = (entry, filename, entryName) => {
  const config = {
    ...baseConfig(),
    target: 'node',
    entry: entry,
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

module.exports = [
  makeConfig('./src/parser.ts', 'dist/core.js', 'Wenyan'),
  makeConfig('./src/execute.ts', 'dist/execute.js', 'Wenyan'),
  makeConfig('./tools/examples.js', 'dist/examples.js', 'Examples'),
  makeConfig('./src/highlight.js', 'dist/highlight.js', 'Highlighter'),
  makeConfig('./src/render.ts', 'dist/render.js', 'Render'),
]