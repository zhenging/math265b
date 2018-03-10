import React from 'react';
import PropTypes from 'prop-types';
import './Main.css';

const Main = (props) => {
  const children = props.children;
  return (
    <main>
      <div className="container">
        <div className="note-body">
          <div className="note-content">{children}</div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
