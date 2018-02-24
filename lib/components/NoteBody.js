import React from 'react';
import PropTypes from 'prop-types';

import md2html from '../md2html';
import './NoteBody.css';

const NoteBody = (props) => {
  const note = props.note;
  const html = { __html: md2html(note) };
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
