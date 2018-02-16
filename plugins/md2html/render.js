const md = require('markdown-it')({
    html: true,
    xhtmlOut: true,
    breaks: true, // Convert '\n' in paragraphs into <br>
    langPrefix: 'language-', // CSS language prefix for fenced blocks. Can be
    linkify: false, // Autoconvert URL-like text to links
    typographer: false,
    quotes: '“”‘’',
    highlight: function(/*str, lang*/) {
      return '';
    }
  }),
  mdm = require('./markdown-it-mathjax'),
  fs = require('fs'),
  path = require('path'),
  mjConfig = require('./mjConfig'),
  Mustache = require('mustache'),
  generateStyles = require('./generateStyles');

md.use(mdm);

module.exports = function(mdInput) {
  let templateFilepath = path.resolve(__dirname, 'template.mst');
  let template = fs.readFileSync(templateFilepath, {
    encoding: 'utf8'
  });
  let htmlOutput = md.render(mdInput);
  let styles = generateStyles();
  let rendered = Mustache.render(template, {
    mathjaxConfig: JSON.stringify(mjConfig),
    styleContent: styles,
    htmlContent: htmlOutput
  });
  return rendered;
};
