/* eslint no-console: "off" */
import fs from 'fs-extra';
import scanStructure from './scanStructure';
import renderWithReact from './renderWithReact';
import CoursePage from '../pages/CoursePage';
import NotePage from '../pages/NotePage';

import transform from './transform';

function generateNotePage(courseName, item) {
  const mdContent = fs.readFileSync(item.filepath, { encoding: 'utf8' });
  const props = {
    menu: [
      {
        name: courseName,
        link: `/${courseName}`
      },
      {
        name: transform(item.title),
        link: ''
      }
    ],
    note: mdContent,
    title: `${item.title}`
  };
  return renderWithReact(NotePage, props);
}

function generateCoursePage(course) {
  const courseStructure = {
    shortName: course.shortName,
    fullName: course.fullName,
    homework: [],
    misc: [],
    notes: []
  };
  course.files.forEach((item) => {
    if (!courseStructure[item.category]) {
      courseStructure[item.category] = [];
    }
    courseStructure[item.category].push({
      name: transform(item.title),
      link: item.link
    });
  });
  const props = {
    course: courseStructure
  };
  return renderWithReact(CoursePage, props);
}

module.exports = function render() {
  const contentMap = {};
  const course = scanStructure();
  const courseName = course.shortName;
  course.files.forEach((item) => {
    contentMap[item.outputFilePath] = generateNotePage(courseName, item);
  });
  contentMap['/calculus/index.html'] = generateCoursePage(course);
  return contentMap;
};
