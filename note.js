import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

import NoteBody from './lib/components/NoteBody';

import './lib/style.css';
import note from './source/calculus/notes/0304_derivatives_of_trigonometric_functions.md';

const menu = [
  {
    name: 'Calculus',
    link: '/courses/calculus'
  },
  {
    name: 'HW0200',
    link: ''
  }
];

ReactDOM.render(<NoteBody menu={menu} note={note} />, document.getElementById('app'));
