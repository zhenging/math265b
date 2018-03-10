import React from 'react';
import PropTypes from 'prop-types';

import md2html from '../md2html';
import Breadcrumb from './Breadcrumb';
import Main from './Main';

const NoteBody = (props) => {
  const note = props.note;
  const html = { __html: md2html(note) };
  return (
    <Main>
      <React.Fragment>
        <Breadcrumb menu={props.menu} />
        <article className="markdown-body" dangerouslySetInnerHTML={html} />
      </React.Fragment>
    </Main>
  );
};

NoteBody.propTypes = {
  menu: PropTypes.array.isRequired,
  note: PropTypes.string.isRequired
};

export default NoteBody;
