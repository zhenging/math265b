import PropTypes from 'prop-types';
import React from 'react';

require('./Header.css');

const Header = (props) => {
  const title = props.title;
  return (
    <header className="header">
      <nav className="header-nav-container">
        <span className="header-nav-item">{title}</span>
        <span className="header-nav-item">Second Title</span>
      </nav>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
