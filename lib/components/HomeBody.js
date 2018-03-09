import React from 'react';
import PropTypes from 'prop-types';

import Main from './Main';

const HomeBody = (props) => {
  const listItems = props.courses.map(course => (
    <li className="course-list-item" key={course.name}>
      <a href={course.link}>{course.name}</a>
    </li>
  ));
  return (
    <Main>
      <ul className="course-list">{listItems}</ul>
    </Main>
  );
};

HomeBody.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired
};
export default HomeBody;
