const fs = require('fs-extra');
const path = require('path');
const klawSync = require('klaw-sync');

const SOURCE_PATH = path.join(process.cwd(), 'source');

module.exports = function scan() {
  // start from source/meta.json file. checkout meta.json for more info.
  // console.log(path.join(SOURCE_PATH, 'meta.json'));
  const meta = fs.readJsonSync(path.join(SOURCE_PATH, 'meta.json'));
  const course = { shortName: meta.shortName, fullName: meta.fullName };
  const files = [];
  meta.categories.forEach((category) => {
    const subdir = path.join(SOURCE_PATH, category);
    klawSync(subdir, { nodir: true }).forEach((item) => {
      const extname = path.extname(item.path);
      if (extname !== '.md') {
        return;
      }
      const basename = path.basename(item.path, '.md');
      let relativePath = path.relative(SOURCE_PATH, item.path);
      relativePath = relativePath.replace('.md', '.html');
      files.push({
        category,
        filepath: item.path,
        title: basename,
        link: `/calculus/${category}/${basename}.html`,
        outputFilePath: `calculus/${relativePath}`
      });
    });
  });
  course.files = files;
  return course;
};
