const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, 'build');

const indexPageHtmlPlugin = new HtmlWebpackPlugin({
  title: 'Calculus',
  template: 'index.html',
  chunks: ['index'],
  filename: path.join(OUTPUT_PATH, 'index.html')
});

const notePageHtmlPlugin = new HtmlWebpackPlugin({
  title: 'Calculus',
  template: 'index.html',
  chunks: ['note'],
  filename: path.join(OUTPUT_PATH, 'note.html')
});

const config = {
  entry: {
    index: './index.js',
    note: './note.js'
  },
  output: {
    filename: '[name].js',
    path: OUTPUT_PATH
  },
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
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [indexPageHtmlPlugin, notePageHtmlPlugin],
  externals: {},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'web',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  devtool: 'source-map',
  devServer: {
    contentBase: [OUTPUT_PATH],
    stats: 'errors-only',
    open: true,
    port: 3000,
    overlay: {
      errors: true,
      warnings: true
    }
  }
};

module.exports = config;
