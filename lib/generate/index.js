/* eslint no-console: "off" */
import findit from 'findit';
import fs from 'fs-extra';
import path from 'path';
import render from './renderWithReact';

const SOURCE_PATH = path.join(process.cwd(), 'source');
const OUTPUT_PATH = path.join(process.cwd(), 'build');

export default function generate() {
  // read sub directories in ./source directory. The sources notes are in thoes
  // sub directories. E.g. ./source/econ201a, ./source/calculus ..
  const dirList = fs.readdirSync(SOURCE_PATH).filter((filename) => {
    const filepath = path.join(SOURCE_PATH, filename);
    return fs.lstatSync(filepath).isDirectory();
  });
  const dirLen = dirList.length;
  if (dirLen === 0) {
    console.log(`Empty source directory. ${SOURCE_PATH}`);
    return;
  }
  console.log(`${dirLen} sub directory(s) found in ${SOURCE_PATH}.`);
  dirList.forEach((dirname) => {
    const inputDir = path.join(SOURCE_PATH, dirname);
    const outputDir = path.join(OUTPUT_PATH, dirname);
    console.log(dirname);
    console.log(inputDir);
    console.log(`   => ${outputDir}`);
    const metajsonFilePath = path.join(inputDir, 'meta.json');
    const metajson = fs.readJsonSync(metajsonFilePath);
    const finder = findit(inputDir);
    finder.on('file', (filepath) => {
      const extname = path.extname(filepath);
      if (extname !== '.md') {
        return;
      }
      const courseName = metajson.courseName;
      const basename = path.basename(filepath, '.md');
      const outputFilePath = path.join(outputDir, `${basename}.html`);
      const mdContent = fs.readFileSync(filepath, { encoding: 'utf8' });
      const htmlContent = render(courseName, mdContent);
      fs.outputFileSync(outputFilePath, htmlContent);
      console.log(`Generating page ${outputFilePath}`);
    });
    finder.on('end', () => {
      console.log(`Done. ${inputDir}`);
    });
  });
}

// const connectives = ['to', 'of', 'and'];
// function generateIndexPage(courseName, filenameList, inputDir, outputDir) {
//   const inputDirBasename = path.basename(inputDir);
//   const noteLinks = filenameList.map((filename) => {
//     const fileBasename = path.basename(filename, '.md');
//     let fragments = fileBasename.split('_');
//     fragments = fragments.map((fragment) => {
//       if (connectives.includes(fragment)) {
//         return fragment;
//       }
//       return fragment.charAt(0).toUpperCase() + fragment.slice(1);
//     });
//     const title = fragments.join(' ');
//     return `#### [${title}](/${inputDirBasename}/${fileBasename}.html)`;
//   });
//   const mdContent = noteLinks.join('\n');
//   const htmlOutput = render(courseName, mdContent);
//   const outputFilePath = path.join(outputDir, 'index.html');
//   fs.outputFileSync(outputFilePath, htmlOutput);
//   console.log(`Md2HtmlPlugin: generating index page ${outputFilePath}`);
// }
