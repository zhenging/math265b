const mdLoader = require('./lib/md-loader'),
  fs = require('fs');

var mdContent = fs.readFileSync('app/test.md', 'utf8')
var htmlContent = mdLoader(mdContent);
fs.writeFileSync('build/index.html', htmlContent);
