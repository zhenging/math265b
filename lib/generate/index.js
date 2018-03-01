/* eslint no-console: "off" */
import fs from 'fs-extra';
import path from 'path';
import klawSync from 'klaw-sync';
import renderWithReact from './renderWithReact';

const SOURCE_PATH = path.join(process.cwd(), 'source');
const CONNECTIVES = ['and', 'at', 'of', 'to', 'with'];

function generateHomePage(courseNames) {
  const links = courseNames.map(course => `#### [${course}](/${course})`);
  links.splice(0, 0, '## Courses');
  return renderWithReact('', links.join('\n'));
}

function generateCoursePage(courseName, notePaths) {
  const links = notePaths.map((notePath) => {
    const basename = path.basename(notePath, '.html');
    let fragments = basename.split('_');
    fragments = fragments.map((fragment) => {
      if (CONNECTIVES.includes(fragment)) {
        return fragment;
      }
      return fragment.charAt(0).toUpperCase() + fragment.slice(1);
    });
    const title = fragments.join(' ');

    return `#### [${title}](/${notePath})`;
  });
  links.splice(0, 0, `## ${courseName}`);
  return renderWithReact('', links.join('\n'));
}

module.exports = function render() {
  // read sub directories in ./source directory. The sources notes are in thoes
  // sub directories. E.g. ./source/econ201a, ./source/calculus ..
  const dirList = fs.readdirSync(SOURCE_PATH).filter((filename) => {
    const filepath = path.join(SOURCE_PATH, filename);
    return fs.lstatSync(filepath).isDirectory();
  });
  const dirLen = dirList.length;
  if (dirLen === 0) {
    console.log(`Empty source directory. ${SOURCE_PATH}`);
  }
  console.log(`${dirLen} sub directory(s) found in ${SOURCE_PATH}.`);
  const contentMap = {};
  const courseNames = [];
  dirList.forEach((dirname) => {
    const inputDir = path.join(SOURCE_PATH, dirname);
    const metajsonFilePath = path.join(inputDir, 'meta.json');
    const metajson = fs.readJsonSync(metajsonFilePath);
    const courseName = metajson.courseName;
    courseNames.push(dirname);
    const notePaths = [];
    klawSync(inputDir, { nodir: true }).forEach((item) => {
      const filepath = item.path;
      const extname = path.extname(filepath);
      if (extname !== '.md') {
        return;
      }
      let relativePath = path.relative(SOURCE_PATH, filepath);
      relativePath = relativePath.replace('.md', '.html');
      const mdContent = fs.readFileSync(filepath, { encoding: 'utf8' });
      const htmlContent = renderWithReact(courseName, mdContent);
      const outputFilePath = relativePath.replace('.md', '.html');
      notePaths.push(outputFilePath);
      contentMap[outputFilePath] = htmlContent;
    });
    contentMap[`/${dirname}/index.html`] = generateCoursePage(courseName, notePaths);
  });
  const homePage = generateHomePage(courseNames);
  contentMap['/index.html'] = homePage;
  return contentMap;
};
