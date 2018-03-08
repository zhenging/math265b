import React from 'react';
import ReactDOM from 'react-dom';
import 'github-markdown-css/github-markdown.css';

import CourseBody from './lib/components/CourseBody';

import './lib/style.css';

const course = {
  name: 'Calculus',
  homework: [
    {
      name: 'hw0100',
      link: '/courses/calculus/hw0100.html'
    },
    {
      name: 'hw0101',
      link: '/courses/calculus/hw0101.html'
    }
  ],
  notes: [
    {
      name: '0201_notes',
      link: '/courses/calculus/0201_notes.html'
    },
    {
      name: '0202_notes',
      link: '/courses/calculus/0202_notes.html'
    }
  ],
  misc: [
    {
      name: 'quiz01',
      link: '/courses/calculus/quiz01.html'
    },
    {
      name: 'quiz02',
      link: '/courses/calculus/quiz02.html'
    }
  ]
};

ReactDOM.render(<CourseBody course={course} />, document.getElementById('app'));
