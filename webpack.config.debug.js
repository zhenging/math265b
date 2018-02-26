import ExtractTextPlugin from 'extract-text-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import path from 'path';

const ENTRY_PATH = path.join(__dirname, 'index.js');
const OUTPUT_PATH = path.join(__dirname, 'build');

const externalModules = nodeExternals({
  whiltelist: ['react-universal-component', 'webpack-flush-chunks', 'github-markdown-css']
});

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
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  entry: ENTRY_PATH,
  output: {
    filename: 'index.js',
    path: OUTPUT_PATH
  },
  // plugins: [new ExtractTextPlugin('style.css')],
  externals: externalModules,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'node',
  watch: true
};

module.exports = config;
