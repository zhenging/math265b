import PropTypes from 'prop-types';
import React from 'react';
import 'github-markdown-css/github-markdown.css';
import '../style.css';

import HomeBody from '../components/HomeBody';

const HomePage = props => (
  <html lang="en">
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <head>
      <title>{props.title}</title>
      <link href="/courses/combined.css" rel="stylesheet" />
    </head>
    <body>
      <HomeBody courses={props.courses} />
    </body>
  </html>
);

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default HomePage;
