import React from 'react';
import PropTypes from 'prop-types';
import Main from './Main';

import './CourseBody.css';

const NoteListItem = (props) => {
  const note = props.note;
  return (
    <li className="note-list-item">
      <a href={`/courses/${note.link}`}>{note.name}</a>
    </li>
  );
};
NoteListItem.propTypes = {
  note: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string
  }).isRequired
};

const NoteList = (props) => {
  const listItems = props.notes.map(note => <NoteListItem key={note.name} note={note} />);
  if (listItems.length === 0) {
    return '';
  }
  return (
    <section className="course-section">
      <h3 className="course-section-head">{props.name}</h3>
      <ul className="note-list">{listItems}</ul>
    </section>
  );
};

NoteList.propTypes = {
  name: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

const CourseBody = (props) => {
  const courseName = props.course.fullName;
  const notes = props.course.notes;
  const homework = props.course.homework;
  const misc = props.course.misc;
  return (
    <Main title={courseName}>
      <React.Fragment>
        <NoteList notes={homework} name="Homework" key="Homework" />
        <NoteList notes={notes} name="Notes" key="Notes" />
        <NoteList notes={misc} name="Misc" key="Misc" />
      </React.Fragment>
    </Main>
  );
};

CourseBody.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseBody;
