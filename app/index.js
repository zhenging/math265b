const content = require('./test.md');
require('./style.css');
require('github-markdown-css/github-markdown.css');

let container = document.getElementsByClassName('markdown-body')[0];
container.innerHTML = content;
