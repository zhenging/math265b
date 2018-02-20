import PropTypes from 'prop-types';
import React from 'react';

import './Header.css';

const Header = (props) => {
  const title = props.title;
  return (
    <header className="header">
      <nav className="header-nav-container container">
        <h2 className="note-title">{title}</h2>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
