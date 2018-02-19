const md = require('markdown-it')({
  html: true,
  xhtmlOut: true,
  breaks: true, // Convert '\n' in paragraphs into <br>
  langPrefix: 'language-', // CSS language prefix for fenced blocks. Can be
  linkify: false, // Autoconvert URL-like text to links
  typographer: false,
  quotes: '“”‘’',
  highlight(/* str, lang */) {
    return '';
  }
});
const mdm = require('./markdown-it-mathjax');
const fs = require('fs');
const path = require('path');
const mjConfig = require('./mjConfig');
const Mustache = require('mustache');
const generateStyles = require('./generateStyles');

md.use(mdm);

module.exports = function render(title, mdInput) {
  const templateFilepath = path.resolve(__dirname, 'template.mst');
  const template = fs.readFileSync(templateFilepath, {
    encoding: 'utf8'
  });
  const htmlOutput = md.render(mdInput);
  const styles = generateStyles();
  const rendered = Mustache.render(template, {
    noteTitle: title,
    mathjaxConfig: JSON.stringify(mjConfig),
    styleContent: styles,
    htmlContent: htmlOutput
  });
  return rendered;
};
