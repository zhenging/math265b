const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const merge = require('webpack-merge');
const path = require('path');
const Md2HtmlPlugin = require('./plugin-md2html');
const DeployPlugin = require('./plugin-deploy');
// const ReactToHtmlPlugin = require('react-to-html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app/index.jsx')
};
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
  entry: PATHS.app,
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

// const extractTextPlugin = new ExtractTextPlugin('style.css');

const includeAssetsPlugin = new HtmlWebpackIncludeAssetsPlugin({
  assets: [
    // {
    //   type: 'js',
    //   attributes: { crossorigin: 'true' },
    //   path: '/react/umd/react.development.js'
    // },
    // {
    //   type: 'js',
    //   attributes: { crossorigin: 'true' },
    //   path: '/react-dom/umd/react-dom.development.js'
    // }
  ],
  append: false
});

// const reactToHtmlPlugin = new ReactToHtmlPlugin('index.html', 'index.js');

// for development
const devConfig = merge(common, {
  plugins: [includeAssetsPlugin],
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

const calculusRepo = 'git@github.com:zhenging/calculus.git';
const econ201aRepo = 'git@github.com:zhenging/econ201a.git';
// for production
const prodConfig = merge(common, {
  plugins: [
    cleanWebpackPlugin,
    new Md2HtmlPlugin('../calculus', 'build'),
    new Md2HtmlPlugin('../econ201a', 'build'),
    new DeployPlugin('./build/calculus', calculusRepo),
    new DeployPlugin('./build/econ201a', econ201aRepo)
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
