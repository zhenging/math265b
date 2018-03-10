import React from 'react';
import ReactDOMServer from 'react-dom/server';

module.exports = function render(type /* React Component */, locals) {
  const element = React.createElement(type, locals, null);
  const htmlContent = ReactDOMServer.renderToString(element);
  return `<!DOCTYPE html>\n${htmlContent}`;
};
