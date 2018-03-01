import PropTypes from 'prop-types';
import React from 'react';
import 'github-markdown-css/github-markdown.css';
import '../style.css';

// import Header from '../components/Header';
/* <Header title={props.title} /> */
import MathjaxSetup from '../components/MathjaxSetup';
import NoteBody from '../components/NoteBody';

const NotePage = props => (
  <html lang="en">
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <head>
      <title>{props.title}</title>
      <link href="/combined.css" rel="stylesheet" />
      <MathjaxSetup />
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
