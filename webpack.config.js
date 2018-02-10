const CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin'),
  merge = require('webpack-merge'),
  path = require('path'),
  webpack = require('webpack'),
  Md2HtmlPlugin = require('./plugin-md2html'),
  PATHS = {
    app: path.join(__dirname, 'app/index.js'),
    build: path.join(__dirname, 'build')
  };

let common = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  entry: PATHS.app,
  output: {},
  plugins: [],
  externals: {},
  resolve: {
    extensions: ['.js']
  },
  target: 'web' // default
};

// clean previously built files
let cleanWebpackPlugin = new CleanWebpackPlugin('build/*', {
  verbose: true,
  exclude: '.git'
});

let extractTextPlugin = new ExtractTextPlugin('style.css');

let htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Zhenging',
  template: 'app/index.html'
});

let md2htmlPlugin = new Md2HtmlPlugin('../calculus', 'build');

// for development
let devConfig = merge(common, {
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [extractTextPlugin, htmlWebpackPlugin, md2htmlPlugin],
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: PATHS.build,
    stats: 'errors-only',
    port: 3000,
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

// for production
let prodConfig = merge(common, {
  output: {
    path: PATHS.build,
    filename: 'bundle.[hash].js'
  },
  plugins: [
    cleanWebpackPlugin,
    extractTextPlugin,
    htmlWebpackPlugin,
    md2htmlPlugin
  ]
});

let configMap = {
  dev: devConfig,
  build: prodConfig,
  debug: devConfig
};
let event = process.env.npm_lifecycle_event;
let config = configMap[event];
module.exports = config;
