import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import mjConfig from './lib/mjConfig';

const ENTRY_PATH = path.join(__dirname, 'index.js');
const OUTPUT_PATH = path.join(__dirname, 'build');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Calculus',
  template: 'index.html',
  mathjax_config: mjConfig
});

// for development
const config = {
  entry: ENTRY_PATH,
  output: {
    filename: 'index.js',
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
  plugins: [htmlWebpackPlugin],
  externals: {},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'web',
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: [OUTPUT_PATH, 'node_modules'],
    stats: 'errors-only',
    port: 3000,
    overlay: {
      errors: true,
      warnings: true
    }
  }
};

module.exports = config;
