import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

import NoteBody from './lib/components/NoteBody';

import './lib/style.css';
import note from './hw0707.md';

const menu = [
  {
    name: 'Calculus',
    link: '/courses/calculus'
  },
  {
    name: 'HW0707',
    link: '/courses/calculus/hw0707'
  }
];

ReactDOM.render(<NoteBody menu={menu} note={note} />, document.getElementById('app'));
