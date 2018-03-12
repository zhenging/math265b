import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

import NoteBody from './lib/components/NoteBody';

import './lib/style.css';
import note from './source/phys208a/notes/quiz_0122.md';

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
