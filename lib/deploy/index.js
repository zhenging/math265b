const fs = require('fs-extra');
const path = require('path');
const ghPages = require('gh-pages');

class DeployPlugin {
  constructor(inputDir, outputDir) {
    const metafile = path.join(inputDir, 'meta.json');
    const metaJson = fs.readJsonSync(metafile);
    this.dist = outputDir;
    this.repo = metaJson.repo;
    console.log(`DeployPlugin: publishing ${this.dist} to ${this.repo}`);
  }

  apply(compiler) {
    // eslint-disable-next-line
    compiler.plugin(['done'], (compiler, callback) => {
      ghPages.publish(
        this.dist,
        {
          user: {
            email: 'ravenzheng2014@gmail.com',
            name: 'zhenging'
          },
          repo: this.repo,
          message: 'Auto-generated commit.'
        },
        (err) => {
          if (!err) {
            console.log(`DeployPlugin: ${this.dist} published.`);
          }
          console.log(err.message);
          callback();
        }
      );
    });
  }
}

module.exports = DeployPlugin;
