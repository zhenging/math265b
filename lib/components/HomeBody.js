import React from 'react';
import PropTypes from 'prop-types';

import Main from './Main';

const CourseListItem = (props) => {
  const course = props.course;
  return (
    <li>
      <a href={course.link}>{course.displayName}</a>
    </li>
  );
};
CourseListItem.propTypes = {
  course: PropTypes.shape({
    displayName: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

const HomeBody = (props) => {
  const listItems = props.courses.map(course => <CourseListItem key={course} course={course} />);
  return (
    <Main title="Courses Portfolio">
      <ul>{listItems}</ul>
    </Main>
  );
};

HomeBody.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default HomeBody;
