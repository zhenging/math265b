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
      use: 'raw-loader'
    }]
  },
  entry: PATHS.app,
  output: {},
  plugins: [],
  externals: {
    'marked': 'marked',
    'MathJax': 'MathJax'
  },
  resolve: {
    extensions: ['.js']
  },
  target: 'web' // default
};

// copy angular and angular-route to build directory
var copyWebpackPlugin = new CopyWebpackPlugin([{
  from: 'node_modules/marked/lib/marked.js',
  to: PATHS.build
}, {
  from: 'node_modules/mathjax/MathJax.js',
  to: PATHS.build
}], {
  debug: 'warning'
});

// clean previously built files
var cleanWebpackPlugin = new CleanWebpackPlugin([PATHS.build], {
  root: __dirname
});

var extractTextPlugin = new ExtractTextPlugin('style.css');

var htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Marked Debug',
  template: 'app/index.html'
});

var jsAssetsPlugin = new HtmlWebpackIncludeAssetsPlugin({
  // assets: ['marked.js', 'MathJax.js'],
  assets: ['marked.js'],
  append: false
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
    jsAssetsPlugin,
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
    jsAssetsPlugin,
    htmlWebpackPlugin
  ]
});;

var configMap = {
  'start': devConfig,
  'build': prodConfig
};
var event = process.env.npm_lifecycle_event;
var config = configMap[event];
module.exports = config;
