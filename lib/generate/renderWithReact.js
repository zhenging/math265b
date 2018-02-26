import React from 'react';
import ReactDOMServer from 'react-dom/server';

import NotePage from '..//template/NotePage';

module.exports = function render(title, mdInput) {
  const page = <NotePage title={title} note={mdInput} />;
  const htmlContent = ReactDOMServer.renderToString(page);
  return `<!DOCTYPE html>\n${htmlContent}`;
};
