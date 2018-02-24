import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';
import fs from 'fs-extra';
import path from 'path';

// const DeployPlugin = require('./plugins').DeployPlugin;
const Md2HtmlPlugin = require('./plugins').Md2HtmlPlugin;

const ENTRY_PATH = path.join(__dirname, 'index.js');
const NOTES_SOURCE_PATH = path.join(__dirname, 'source');
const OUTPUT_PATH = path.join(__dirname, 'build');

const common = {
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
        use: ['css-loader']
      }
    ]
  },
  entry: ENTRY_PATH,
  output: {
    filename: 'index.js',
    path: OUTPUT_PATH
  },
  plugins: [],
  externals: {},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: 'web' // default
};

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  title: 'Calculus',
  template: 'index.html' // Load a custom
});

// for development
const devConfig = merge(common, {
  output: {
    path: OUTPUT_PATH,
    filename: 'index.js'
  },
  plugins: [htmlWebpackPlugin],
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

// clean previously built files
const cleanWebpackPlugin = new CleanWebpackPlugin('build/*');
const plugins = [cleanWebpackPlugin];
// read sub directories in ./source directory. The sources notes are in thoes
// sub directories. E.g. ./source/econ201a, ./source/calculus ..
const subDirList = fs.readdirSync(NOTES_SOURCE_PATH).filter((filename) => {
  const filepath = path.join(NOTES_SOURCE_PATH, filename);
  return fs.lstatSync(filepath).isDirectory();
});
const subDirLen = subDirList.length;
if (subDirLen === 0) {
  // eslint-disable-next-line
  console.log(
    `Empty source directory. ${NOTES_SOURCE_PATH} directory should at least contains one sub directory of notes.`);
} else {
  // eslint-disable-next-line
  console.log(`${subDirLen} sub directory(s) found in ${NOTES_SOURCE_PATH}.`);
  subDirList.forEach((subDirName) => {
    const inputDir = path.join(NOTES_SOURCE_PATH, subDirName);
    const outputDir = path.join(OUTPUT_PATH, subDirName);
    plugins.push(new Md2HtmlPlugin(inputDir, outputDir));
    // plugins.push(new DeployPlugin(inputDir, outputDir));
  });
}

// for production
const prodConfig = merge(common, { plugins, target: 'node' });

const configMap = {
  dev: devConfig,
  build: prodConfig,
  debug: devConfig
};
const event = process.env.npm_lifecycle_event;
const config = configMap[event];
module.exports = config;
