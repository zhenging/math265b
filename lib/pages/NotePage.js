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
      <link href="/courses/combined.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css" integrity="sha384-TEMocfGvRuD1rIAacqrknm5BQZ7W7uWitoih+jMNFXQIbNl16bO8OZmylH/Vi/Ei" crossOrigin="anonymous" />
    </head>
    <body>
      <main>
        <div className="container">
          <NoteBody note={props.note} />
        </div>
      </main>
    </body>
  </html>
);

NotePage.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

export default NotePage;
