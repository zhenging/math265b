import ReactDOMServer from 'react-dom/server';

module.exports = function render(page /* React Component */) {
  const htmlContent = ReactDOMServer.renderToString(page);
  return `<!DOCTYPE html>\n${htmlContent}`;
};
