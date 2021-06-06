const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')

rendererRules = rules.concat({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
});

module.exports = {
  target: 'electron-renderer',
  module: {
    rules: rendererRules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
    },
};