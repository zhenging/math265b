const fs = require('fs-extra'),
  path = require('path'),
  render = require('./render');

class Md2HtmlPlugin {
  constructor(_inputFolder, _outputFolder) {
    this.inputFolder = _inputFolder;
    this.outputFolder = _outputFolder;
  }

  apply(compiler) {
    compiler.plugin(['run', 'watch-run'], (compiler, callback) => {
      let inputFolderBasename = path.basename(this.inputFolder);
      let filelist = fs.readdirSync(this.inputFolder);
      filelist.forEach(filename => {
        if (path.extname(filename) != '.md') {
          return;
        }
        let fileBasename = path.basename(filename, '.md');
        let filepath = path.join(this.inputFolder, filename);
        let mdOutput = fs.readFileSync(filepath, { encoding: 'utf8' });
        let htmlOutput = render(mdOutput);
        let outputFilepath = path.join(
          this.outputFolder,
          inputFolderBasename,
          fileBasename + '.html'
        );
        fs
          .outputFile(outputFilepath, htmlOutput)
          .then(function(result) {
            console.log(outputFilepath);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
      callback();
    });
  }
}

module.exports = Md2HtmlPlugin;
