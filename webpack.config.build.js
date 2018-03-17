const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const GenerateStaticPagePlugin = require('./lib/GenerateStaticPagePlugin');
const path = require('path');

const ENTRY_PATH = './generate.js';
const OUTPUT_PATH = path.join(__dirname, 'build');

const cleanPlugin = new CleanWebpackPlugin('build/*');
const copyWebpackPlugin = new CopyWebpackPlugin(
  [
    {
      context: 'source',
      from: '**/assets/*',
      to: 'calculus',
      toType: 'dir'
    }
  ],
  { debug: 'info' }
);
const extractCSSPlugin = new ExtractTextPlugin('/calculus/combined.css');
const generateStaticPagePlugin = new GenerateStaticPagePlugin();

const config = {
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: extractCSSPlugin.extract(['css-loader'])
      }
    ]
  },
  entry: ENTRY_PATH,
  output: {
    filename: 'generate.js',
    path: OUTPUT_PATH,
    libraryTarget: 'umd'
  },
  plugins: [cleanPlugin, extractCSSPlugin, copyWebpackPlugin, generateStaticPagePlugin],
  externals: [],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'node'
};

module.exports = config;
