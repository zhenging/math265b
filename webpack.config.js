const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const merge = require('webpack-merge');
const path = require('path');
const Md2HtmlPlugin = require('./plugin-md2html');

const PATHS = {
  app: path.join(__dirname, 'app/index.jsx'),
  build: path.join(__dirname, 'build')
};

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
  entry: PATHS.app,
  output: {},
  plugins: [],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
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

const extractTextPlugin = new ExtractTextPlugin('style.css');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Zhenging',
  template: 'app/index.html'
});

const includeAssetsPlugin = new HtmlWebpackIncludeAssetsPlugin({
  assets: [
    {
      type: 'js',
      attributes: { crossorigin: 'true' },
      path: '/react/umd/react.development.js'
    },
    {
      type: 'js',
      attributes: { crossorigin: 'true' },
      path: '/react-dom/umd/react-dom.development.js'
    }
  ],
  append: false
});

const md2HtmlPlugin = new Md2HtmlPlugin('../calculus', 'build');

// let md2htmlPlugin = new Md2HtmlPlugin('../calculus', 'build');

// for development
const devConfig = merge(common, {
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [extractTextPlugin, htmlWebpackPlugin, includeAssetsPlugin, md2HtmlPlugin],
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: [PATHS.build, 'node_modules'],
    stats: 'errors-only',
    port: 3000,
    overlay: {
      errors: true,
      warnings: true
    }
  }
});

// for production
const prodConfig = merge(common, {
  output: {
    path: PATHS.build,
    filename: 'bundle.[hash].js'
  },
  plugins: [cleanWebpackPlugin, extractTextPlugin, htmlWebpackPlugin, md2HtmlPlugin]
});

const configMap = {
  dev: devConfig,
  build: prodConfig,
  debug: devConfig
};
const event = process.env.npm_lifecycle_event;
const config = configMap[event];
module.exports = config;
