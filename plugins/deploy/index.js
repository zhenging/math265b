const fs = require('fs-extra');
const path = require('path');
// const ghPages = require('gh-pages');

class DeployPlugin {
  constructor(srcDir) {
    const metafile = path.join(srcDir, 'meta.json');
    const metaJson = fs.readJsonSync(metafile);
    const srcDirName = path.basename(srcDir);
    this.dist = path.join(__dirname, 'build', srcDirName);
    this.repo = metaJson.repo;
    console.log(`${this.dist}\n${this.repo}`);
  }

  // eslint-disable-next-line
  apply(compiler) {
    // eslint-disable-next-line
    compiler.plugin(['done'], (compiler, callback) => {
      // ghPages.publish(this.dist, {
      //   repo: this.repo,
      //   message: 'Auto-generated commit'
      // });
      // callback();
    });
  }
}

module.exports = DeployPlugin;
