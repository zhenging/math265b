/* eslint no-console: "off" */
const ghPages = require('gh-pages');

module.exports = function deploy(dist) {
  ghPages.publish(
    dist,
    {
      // user: {
      //   email: 'ravenzheng2014@gmail.com',
      //   name: 'zhenging'
      // },
      repo: 'git@github.com:zhenging/courses.git',
      message: 'Auto-generated commit.'
    },
    (err) => {
      if (!err) {
        console.log(`Deploy: ${dist} published.`);
      }
      console.log(err.message);
    }
  );
};
