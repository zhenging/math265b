import React from 'react';
import PropTypes from 'prop-types';
import MarkdownIt from 'markdown-it';
import markdownItMathjax from './markdown-it-mathjax';

import './NoteBody.css';

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

const NoteBody = (props) => {
  const note = props.note;
  const html = { __html: markdownIt.render(note) };
  return (
    <div className="note-body">
      <div className="note-meta" />
      <div className="note-content">
        <article className="markdown-body" dangerouslySetInnerHTML={html} />
      </div>
    </div>
  );
};

NoteBody.propTypes = {
  note: PropTypes.string.isRequired
};

export default NoteBody;
