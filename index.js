import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

import HomeBody from './lib/components/HomeBody';

import './lib/style.css';

const courses = [
  {
    name: 'econ201a',
    link: '/courses/econ201a'
  },
  {
    name: 'calculus',
    link: '/courses/calculus'
  },
  {
    name: 'cis241',
    link: '/courses/cis241'
  }
];

ReactDOM.render(<HomeBody courses={courses} />, document.getElementById('app'));
