const fs = require('fs');
const path = require('path');

function renameInBatch(dir) {
  dirpath = path.resolve(__dirname, dir);
  let filelist = fs.readdirSync(dirpath);
  filelist.forEach(filename => {
    if (path.extname(filename) != '.md') return;
    let originalFilepath = path.join(dirpath, filename);
    let newFilename = filename.replace(/\s/g, '_');
    newFilename = newFilename.toLowerCase();
    let newFilepath = path.join(dirpath, newFilename);
    fs.renameSync(originalFilepath, newFilepath);
  });
}

renameInBatch('.');
