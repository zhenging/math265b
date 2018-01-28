import mdContent from './test.md';
require('./style.css');
require('github-markdown-css/github-markdown.css');

let marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

// add custom rule for math block
let math_block = /^\$\$\n([\s\S]+)\n\$\$(?:\n)?/;
let Lexer = marked.Lexer;
Lexer.prototype._token = Lexer.prototype.token;
Lexer.prototype.token = function (src, top, bq) {
  var cap;
  if ((cap = math_block.exec(src))) {
    src = src.substring(cap[0].length);
    if (cap[0].length > 1) {
      this.tokens.push({
        type: 'math_block',
        text: cap[0]
      });
    }
  }
  return this._token(src, top, bq);
}

// add parsing case for math block
let Parser = marked.Parser;
Parser.prototype._tok = Parser.prototype.tok;
Parser.prototype.tok = function () {
  if (this.token.type == 'math_block') {
    return '<div class="mathjax-exps">' + this.token.text + '</div>';
  } else {
    return this._tok();
  }
}

let container = document.getElementsByClassName('markdown-body')[0];
let htmlContent = marked(mdContent);
container.innerHTML = htmlContent;
