const path = require('path')
const dts = require('dts-bundle');

const defaultPlugins = () => [
  new (require('remove-strict-webpack-plugin'))()
]

const baseConfig = () => {
  return {
    devtool: 'source-map',
    output: {
      globalObject: '(typeof self !== "undefined" ? self : this)', // make it works for both node and browser
      libraryTarget: 'umd2',
      library: ["Wenyan", "[name]"],
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]/index.min.js',
    },
    plugins: defaultPlugins(),
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

var DtsBundlePlugin = (function () {
  const dts = require('dts-bundle');

  function DtsBundlePlugin(options){
    if (options === void 0) { options = {}; }
    this.options = options;
  }

  function _bundle(options) {
    return () => dts.bundle(options);
  }

  DtsBundlePlugin.prototype.apply = function (compiler) {
    const bundle = () => _bundle(this.options);

    if (!!compiler.hooks) {
      compiler.hooks.afterEmit.tap('DtsBundlePlugin', bundle());
    } else {
      compiler.plugin('done', bundle());
    }
  };

  return DtsBundlePlugin;
})();


module.exports =  {
  baseConfig,
  defaultPlugins,
  DtsBundlePlugin
}