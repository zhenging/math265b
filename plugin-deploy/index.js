const path = require('path');
const ghPages = require('gh-pages');

class DeployPlugin {
  constructor(dist, repo) {
    this.dist = dist;
    this.repo = repo;
  }

  apply(compiler) {
    // eslint-disable-next-line
    compiler.plugin(['done'], (compiler, callback) => {
      const distBasename = path.basename(this.dist);
      // eslint-disable-next-line
      console.log(distBasename);
      ghPages.publish(this.dist, {
        repo: this.repo,
        message: 'Auto-generated commit'
      });
      // callback();
    });
  }
}

module.exports = DeployPlugin;
