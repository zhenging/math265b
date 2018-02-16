const fs = require('fs-extra');
const path = require('path');
const render = require('./render');

function generateIndexPage(mdContent, outputFolder, inputFolder) {
  const htmlOutput = render(mdContent);
  const outputFilepath = path.join(outputFolder, inputFolder, 'index.html');
  fs.outputFileSync(outputFilepath, htmlOutput);
}

class Md2HtmlPlugin {
  constructor(_inputFolder, _outputFolder) {
    this.inputFolder = _inputFolder;
    this.outputFolder = _outputFolder;
  }

  apply(compiler) {
    // eslint-disable-next-line
    compiler.plugin(['run', 'watch-run'], (compiler, callback) => {
      const inputFolderBasename = path.basename(this.inputFolder);
      const filelist = fs.readdirSync(this.inputFolder);
      const noteLinks = [];
      const connectives = ['to', 'of', 'and'];
      filelist.forEach((filename) => {
        if (path.extname(filename) !== '.md') {
          return;
        }
        if (filename === 'readme.md') {
          return;
        }
        const fileBasename = path.basename(filename, '.md');
        const filepath = path.join(this.inputFolder, filename);
        const mdOutput = fs.readFileSync(filepath, { encoding: 'utf8' });
        const htmlOutput = render(mdOutput);
        const outputFilepath = path.join(
          this.outputFolder,
          inputFolderBasename,
          `${fileBasename}.html`
        );
        fs.outputFileSync(outputFilepath, htmlOutput);
        let fragments = fileBasename.split('_');
        fragments = fragments.map((fragment) => {
          if (connectives.includes(fragment)) {
            return fragment;
          }
          return fragment.charAt(0).toUpperCase() + fragment.slice(1);
        });
        const noteTitle = fragments.join(' ');
        const noteLink = `#### [${noteTitle}](/${inputFolderBasename}/${fileBasename})`;
        noteLinks.push(noteLink);
      });
      generateIndexPage(noteLinks.join('\n'), this.outputFolder, inputFolderBasename);
      callback();
    });
  }
}

module.exports = Md2HtmlPlugin;
