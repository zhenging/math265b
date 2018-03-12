import React from 'react';
import PropTypes from 'prop-types';

import md2html from '../md2html';
import Breadcrumb from './Breadcrumb';
import TagList from './TagList';
import Main from './Main';

const NoteBody = (props) => {
  const md = md2html(props.note);
  const html = { __html: md.document };
  const tags = md.meta.tags ? md.meta.tags : [];
  return (
    <Main>
      <React.Fragment>
        <Breadcrumb menu={props.menu} />
        <TagList tags={tags} />
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
