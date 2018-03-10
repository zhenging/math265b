// block level - pagebreak
// e.g. <!-- pagebreak -->
const identifier = '<!-- pagebreak -->';
const identifierLen = identifier.length;

function pagebreak(state, startLine, endLine, silent) {
  const start = state.bMarks[startLine] + state.tShift[startLine];
  if (identifier !== state.src.substr(start, identifierLen)) {
    return false;
  }
  // Since start is found, we can report success here in validation mode
  if (silent) {
    return true;
  }
  state.line = startLine + 1;

  let token = state.push('pagebreak-open', 'div', 1);
  token.markup = identifier;
  token.map = [startLine, state.line];
  token.attrPush(['class', 'pagebreak']);

  token = state.push('pagebreak-close', 'div', -1);
  token.markup = identifier;

  return true;
}

module.exports = function plugin(md) {
  md.block.ruler.before('fence', 'pagebreak', pagebreak, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  });
};
