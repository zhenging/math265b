import MarkdownIt from 'markdown-it';
import markdownItMathjax from './markdown-it-mathjax';
import markdownItContainer from './markdown-it-container';
import markdownItPagebreak from './markdown-it-pagebreak';

const markdownIt = MarkdownIt({
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
markdownIt.use(markdownItMathjax);
markdownIt.use(markdownItContainer, 'Definition');
markdownIt.use(markdownItContainer, 'Example');
markdownIt.use(markdownItContainer, 'Solution');
markdownIt.use(markdownItContainer, 'Theorem');
markdownIt.use(markdownItPagebreak);

module.exports = function render(md) {
  return markdownIt.render(md);
};
