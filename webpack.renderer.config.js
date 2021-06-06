const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')

configuredRules = rules.concat({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
});

module.exports = {
  target: 'electron-renderer',
  module: {
    rules: configuredRules
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
    },
};