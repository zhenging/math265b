import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

import NoteBody from './lib/components/NoteBody';

import './lib/style.css';
import note from './source/notes/0201_the_idea_of_limits.md';

const menu = [
  {
    name: 'Calculus',
    link: '/calculus'
  },
  {
    name: 'HW0200',
    link: ''
  }
];

ReactDOM.render(<NoteBody menu={menu} note={note} />, document.getElementById('app'));
