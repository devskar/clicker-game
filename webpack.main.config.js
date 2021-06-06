const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')

configuredRules = rules.concat({
	test: /\.json$/,
	loader: 'file-loader',
	type: 'javascript/auto',
  options: {
    name() {
      return '[path][name].[ext]';
    }
}})

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.ts',
  target: 'electron-main',
  // Put your normal webpack config below here
  module: {
    rules: configuredRules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};