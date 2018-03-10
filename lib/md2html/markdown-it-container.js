// Process block-level custom containers with name
/* eslint no-param-reassign: "off" */
module.exports = function namedContainer(md, name) {
  const identifier = `>${name}`;

  function container(state, startLine, endLine, silent) {
    const identifierLen = identifier.length;
    let pos,
      nextLine,
      markup,
      token;

    const start = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];

    // e.g. if name = 'Solution', identifier = '>Solution'
    // identifierLen = 9.
    // Check out the first 9 characters,whether such string (9 characters)
    // equals identifier
    if (identifier !== state.src.substr(start, identifierLen)) {
      return false;
    }

    // Since start is found, we can report success here in validation mode
    if (silent) {
      return true;
    }

    // Search for the end of the container lock,
    // the end is either an empty line or end of the whole document.
    nextLine = startLine;
    for (;;) {
      nextLine += 1;
      if (nextLine >= endLine) {
        // end of document => end of the container
        break;
      }
      if (state.isEmpty(nextLine)) {
        // empty line found => end of the container
        break;
      }
    }

    const oldParent = state.parentType;
    const oldLineMax = state.lineMax;
    state.parentType = 'container';

    // this will prevent lazy continuations from ever going past our end marker
    state.lineMax = nextLine;

    token = state.push(`container_${name}_open`, 'div', 1);
    token.markup = markup;
    token.block = true;
    token.map = [startLine, nextLine];
    const styleNames = [`named-container-${name.toLowerCase()}`];
    token.attrPush(['class', styleNames.join(' ')]);

    token = state.push('paragraph_open', 'p', 1);
    token.map = [startLine, startLine + 1];

    token = state.push('inline', '', 0);
    token.content = `**${state.src.substring(start + 1, max)}**`;
    token.map = [startLine, startLine + 1];
    token.children = [];

    token = state.push('paragraph_close', 'p', -1);
    token.map = [startLine, startLine + 1];

    state.md.block.tokenize(state, startLine + 1, nextLine);

    token = state.push(`container_${name}_close`, 'div', -1);
    token.markup = state.src.slice(start, pos);
    token.block = true;

    state.parentType = oldParent;
    state.lineMax = oldLineMax;
    state.line = nextLine;

    return true;
  }

  md.block.ruler.before('fence', `container_${name}`, container, {
    alt: ['paragraph', 'reference', 'blockquote', 'list']
  });
};
