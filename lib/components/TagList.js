import React from 'react';
import PropTypes from 'prop-types';

const TagList = (props) => {
  const tags = props.tags;
  const listItems = tags.map(tag => (
    <span className="note-tag" key={tag}>
      {tag}
    </span>
  ));
  return <div className="note-tags-section">{listItems}</div>;
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default TagList;
