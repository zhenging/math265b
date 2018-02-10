const path = require('path'),
  md2html = require('./lib/md2html'),
  inputFolder = '../reading/calculus-for-scientists-and-engineers',
  // inputFolder = './app',
  outputFolder = './build';

md2html(
  path.resolve(__dirname, inputFolder),
  path.resolve(__dirname, outputFolder)
);
