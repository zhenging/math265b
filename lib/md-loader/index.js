const md = require('markdown-it')({
    html: true,
    xhtmlOut: true,
    breaks: true, // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-', // CSS language prefix for fenced blocks. Can be
    linkify: false, // Autoconvert URL-like text to links
    typographer: false,
    quotes: '“”‘’',
    highlight: function ( /*str, lang*/ ) {
      return '';
    }
  }),
  mdm = require('./markdown-it-mathjax'),
  fs = require('fs'),
  path = require('path'),
  mjConfig = require('./mjConfig'),
  styles = require('github-markdown-css/github-markdown.css'),
  Mustache = require('mustache');

md.use(mdm);

module.exports = function (mdInput) {
  console.log(path.resolve(__dirname, 'template.mst'));
  var templateFilepath = path.resolve(__dirname, 'template.mst');
  var template = fs.readFileSync(templateFilepath, {
    encoding: 'utf8'
  });
  var htmlOuput = md.render(mdInput);
  var rendered = Mustache.render(template, {
    mjConfig: JSON.stringify(mjConfig),
    htmlContent: htmlOuput
  });
  console.log(rendered);
  return rendered;
};
