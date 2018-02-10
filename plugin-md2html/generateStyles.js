const fs = require('fs'),
  path = require('path'),
  defaultCSSFile = 'node_modules/github-markdown-css/github-markdown.css',
  customCSSFile = './style.css',
  readOptions = { encoding: 'utf8' };

module.exports = function() {
  let defaultStyles = fs.readFileSync(defaultCSSFile, readOptions);
  let customStyles = fs.readFileSync(
    path.join(__dirname, customCSSFile),
    readOptions
  );
  return defaultStyles + '\n' + customStyles;
};
