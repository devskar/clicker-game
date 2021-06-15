const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')

rendererRules = rules.concat({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
},
{
  test: /\.(jpe?g|png|svg)$/,
  loader: 'file-loader',
  options: {
    name: '[path][name].[ext]'    
  }
},);

module.exports = {
  target: 'electron-renderer',
  module: {
    rules: rendererRules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    },
};