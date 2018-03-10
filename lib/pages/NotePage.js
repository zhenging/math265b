import PropTypes from 'prop-types';
import React from 'react';
import 'github-markdown-css/github-markdown.css';
import '../style.css';

import NoteBody from '../components/NoteBody';

const NotePage = props => (
  <html lang="en">
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <head>
      <title>{props.title}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css"
        integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei"
        crossOrigin="anonymous"
      />
      <link href="/courses/combined.css" rel="stylesheet" />
    </head>
    <body>
      <NoteBody menu={props.menu} note={props.note} />
    </body>
  </html>
);

NotePage.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  note: PropTypes.string.isRequired
};

export default NotePage;
