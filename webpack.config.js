const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const DeployPlugin = require('./plugins').DeployPlugin;
const Md2HtmlPlugin = require('./plugins').Md2HtmlPlugin;

const ENTRY_PATH = path.join(__dirname, 'app/index.jsx');
const OUTPUT_PATH = path.join(__dirname, 'build');

const common = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  entry: ENTRY_PATH,
  output: {
    filename: 'index.js',
    path: OUTPUT_PATH,
    library: 'MyComponent',
    libraryTarget: 'umd'
  },
  plugins: [],
  externals: {},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'web' // default
};

// clean previously built files
const cleanWebpackPlugin = new CleanWebpackPlugin('build/*', {
  verbose: true,
  exclude: '.git'
});

// for development
const devConfig = merge(common, {
  plugins: [],
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
});

// for production
const BUILD_SOURCE = process.env.BUILD_SOURCE;
const absBuildSource = path.resolve(__dirname, BUILD_SOURCE);
const prodConfig = merge(common, {
  plugins: [
    cleanWebpackPlugin,
    new Md2HtmlPlugin(absBuildSource, 'build'),
    new DeployPlugin(absBuildSource)
  ]
});

const configMap = {
  dev: devConfig,
  build: prodConfig,
  debug: devConfig
};
const event = process.env.npm_lifecycle_event;
const config = configMap[event];
module.exports = config;
