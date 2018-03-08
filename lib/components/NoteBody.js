import React from 'react';
import PropTypes from 'prop-types';

import md2html from '../md2html';
import Main from './Main';

const NoteBody = (props) => {
  const note = props.note;
  const html = { __html: md2html(note) };
  return (
    <Main title="Place Holder">
      <article className="markdown-body" dangerouslySetInnerHTML={html} />
    </Main>
  );
};

NoteBody.propTypes = {
  note: PropTypes.string.isRequired
};

export default NoteBody;
