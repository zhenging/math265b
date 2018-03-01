import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

// import Header from './lib/components/Header';
/* <Header title={props.title} /> */
import NoteBody from './lib/components/NoteBody';

import note from '../calculus/homework/hw0707.md';
import './lib/style.css';

const App = props => (
  <React.Fragment>
    <main>
      <div className="container">
        <NoteBody note={props.note} />
      </div>
    </main>
  </React.Fragment>
);

App.propTypes = {
  // title: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired
};

ReactDOM.render(<App title="Calculus" note={note} />, document.getElementById('app'));
