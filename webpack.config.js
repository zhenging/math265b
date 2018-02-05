const CleanWebpackPlugin = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin'),
  merge = require('webpack-merge'),
  path = require('path'),
  webpack = require('webpack'),
  PATHS = {
    app: path.join(__dirname, 'app/index.js'),
    build: path.join(__dirname, 'build')
  };

// require('md-loader!md-loader');

var common = {
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }, {
      test: /\.md$/,
      use: [
        'raw-loader',
        path.join(__dirname, 'lib/md-loader')
      ]
    }]
  },
  entry: PATHS.app,
  output: {},
  plugins: [],
  externals: {
    'MathJax': 'MathJax'
  },
  resolve: {
    extensions: ['.js']
  },
  target: 'web' // default
};

// copy angular and angular-route to build directory
var copyWebpackPlugin = new CopyWebpackPlugin([{
  from: 'node_modules/mathjax',
  to: 'mathjax'
}, {
  from: 'node_modules/markdown-it',
  to: 'markdown-it'
}], {
  debug: 'warning'
});

// clean previously built files
var cleanWebpackPlugin = new CleanWebpackPlugin([PATHS.build], {
  root: __dirname
});

var extractTextPlugin = new ExtractTextPlugin('style.css');

var htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Markedown Viewer',
  template: 'app/index.html'
});

// for development
var devConfig = merge(common, {
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    copyWebpackPlugin,
    extractTextPlugin,
    htmlWebpackPlugin
  ],
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
var prodConfig = merge(common, {
  output: {
    path: PATHS.build,
    filename: 'bundle.[hash].js'
  },
  plugins: [
    cleanWebpackPlugin,
    copyWebpackPlugin,
    extractTextPlugin,
    htmlWebpackPlugin
  ]
});;

var configMap = {
  'dev': devConfig,
  'build': prodConfig
};
var event = process.env.npm_lifecycle_event;
var config = configMap[event];
module.exports = config;
