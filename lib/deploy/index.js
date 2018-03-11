/* eslint no-console: "off" */
const ghPages = require('gh-pages');
const moment = require('moment');

module.exports = function deploy(dist) {
  ghPages.publish(
    dist,
    {
      message: `Auto-generated update at ${moment().format()}`
    },
    (err) => {
      if (!err) {
        console.log(`Deploy: ${dist} published.`);
      }
      console.log(err.message);
    }
  );
};
