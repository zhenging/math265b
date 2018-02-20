const fs = require('fs-extra');
const path = require('path');
const render = require('./renderWithReact');

const connectives = ['to', 'of', 'and'];
function generateIndexPage(courseName, filenameList, inputDir, outputDir) {
  const inputDirBasename = path.basename(inputDir);
  const noteLinks = filenameList.map((filename) => {
    const fileBasename = path.basename(filename, '.md');
    let fragments = fileBasename.split('_');
    fragments = fragments.map((fragment) => {
      if (connectives.includes(fragment)) {
        return fragment;
      }
      return fragment.charAt(0).toUpperCase() + fragment.slice(1);
    });
    const title = fragments.join(' ');
    return `#### [${title}](/${inputDirBasename}/${fileBasename}.html)`;
  });
  const mdContent = noteLinks.join('\n');
  const htmlOutput = render(courseName, mdContent);
  const outputFilePath = path.join(outputDir, 'index.html');
  fs.outputFileSync(outputFilePath, htmlOutput);
  console.log(`Md2HtmlPlugin: generating index page ${outputFilePath}`);
}

function generatePage(courseName, inputFilePath, outputDir) {
  const fileBasename = path.basename(inputFilePath, '.md');
  const outputFilePath = path.join(outputDir, `${fileBasename}.html`);
  const mdContent = fs.readFileSync(inputFilePath, { encoding: 'utf8' });
  const htmlContent = render(courseName, mdContent);
  fs.outputFileSync(outputFilePath, htmlContent);
  console.log(`Md2HtmlPlugin: generating page ${outputFilePath}`);
}

class Md2HtmlPlugin {
  constructor(_inputDir, _outputDir) {
    this.inputDir = _inputDir;
    this.outputDir = _outputDir;
    console.log('Md2HtmlPlugin: input -', this.inputDir);
    console.log('Md2HtmlPlugin: output -', this.outputDir);
  }

  apply(compiler) {
    // eslint-disable-next-line
    compiler.plugin(['run', 'watch-run'], (compiler, callback) => {
      const metaJsonFilePath = path.join(this.inputDir, 'meta.json');
      const metaJson = fs.readJsonSync(metaJsonFilePath);
      const courseName = metaJson.courseName;
      const subDirList = fs.readdirSync(this.inputDir).filter((filename) => {
        const filepath = path.join(this.inputDir, filename);
        return fs.lstatSync(filepath).isDirectory();
      });
      const fillnameList = [];
      subDirList.forEach((subDirName) => {
        const subDirPath = path.join(this.inputDir, subDirName);
        const filelist = fs.readdirSync(subDirPath);
        filelist.forEach((filename) => {
          if (path.extname(filename) !== '.md') {
            return;
          }
          const inputFilePath = path.join(subDirPath, filename);
          generatePage(courseName, inputFilePath, this.outputDir);
          fillnameList.push(filename);
        });
      });

      generateIndexPage(courseName, fillnameList, this.inputDir, this.outputDir);
      console.log('Md2HtmlPlugin: done');
      callback();
    });
  }
}

module.exports = Md2HtmlPlugin;
