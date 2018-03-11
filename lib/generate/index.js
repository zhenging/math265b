/* eslint no-console: "off" */
import fs from 'fs-extra';
import path from 'path';
import klawSync from 'klaw-sync';
import renderWithReact from './renderWithReact';
import HomePage from '../pages/HomePage';
import CoursePage from '../pages/CoursePage';
import NotePage from '../pages/NotePage';

const SOURCE_PATH = path.join(process.cwd(), 'source');
const CONNECTIVES = ['and', 'at', 'of', 'to', 'with'];

function generateHomePage(meta) {
  const namelinkPairs = Object.keys(meta).map(courseName => ({
    name: courseName,
    link: `/courses/${courseName}`
  }));
  const props = {
    title: 'Course Portfolio',
    courses: namelinkPairs
  };
  return renderWithReact(HomePage, props);
}

// from 01_chapter1.html to 01 Chapter1
function transform(str) {
  let fragments = str.split('_');
  fragments = fragments.map((fragment) => {
    if (CONNECTIVES.includes(fragment)) {
      return fragment;
    }
    return fragment.charAt(0).toUpperCase() + fragment.slice(1);
  });
  return fragments.join(' ');
}

function generateCoursePage(courseName, fullCourseName, notePaths) {
  const course = {
    shortName: courseName,
    fullName: fullCourseName,
    homework: [],
    misc: [],
    notes: []
  };
  debugger;
  notePaths.forEach((notePath) => {
    // notePath = /courses/cis241/homework/hw0100.html
    // fragments = ['cis241', 'homework', 'hw0100.html']
    const fragments = notePath.split(path.sep);
    const basename = path.basename(fragments[4], '.html');
    // fragments[2] =homework
    const category = fragments[3];
    if (course[category]) {
      course[category].push({
        name: transform(basename),
        link: notePath
      });
    }
  });
  const props = {
    menu: [
      {
        name: 'Courses',
        link: '/courses'
      },
      {
        name: courseName,
        link: `/courses/${courseName}`
      }
    ],
    course
  };
  return renderWithReact(CoursePage, props);
}

module.exports = function render() {
  // start from source/meta.json file. checkout meta.json for more info.
  const meta = fs.readJsonSync(path.join(SOURCE_PATH, 'meta.json'));
  const contentMap = {};
  const homePage = generateHomePage(meta);
  contentMap['/courses/index.html'] = homePage;
  Object.keys(meta).forEach((courseName) => {
    const courseDir = path.join(SOURCE_PATH, courseName);
    if (!fs.existsSync(courseDir)) {
      throw new Error(`Course ${courseName} does not exist at ${courseDir}`);
    } else {
      const notePaths = [];
      klawSync(courseDir, { nodir: true }).forEach((item) => {
        const filepath = item.path;
        const extname = path.extname(filepath);
        if (extname !== '.md') {
          return;
        }
        const mdContent = fs.readFileSync(filepath, { encoding: 'utf8' });
        const fileBasename = path.basename(filepath, '.md');
        const props = {
          menu: [
            {
              name: courseName,
              link: `/courses/${courseName}`
            },
            {
              name: transform(fileBasename),
              link: ''
            }
          ],
          note: mdContent,
          title: `${courseName} - ${fileBasename}`
        };
        const htmlContent = renderWithReact(NotePage, props);
        let relativePath = path.relative(SOURCE_PATH, filepath);
        relativePath = relativePath.replace('.md', '.html');
        const outputFilePath = path.join('/courses', relativePath);
        notePaths.push(outputFilePath);
        contentMap[outputFilePath] = htmlContent;
      });
      contentMap[`/courses/${courseName}/index.html`] = generateCoursePage(
        courseName,
        meta[courseName],
        notePaths
      );
    }
  });
  // console.log(Object.keys(contentMap));
  return contentMap;
};
