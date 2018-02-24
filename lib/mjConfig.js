const config = {
  extensions: ['tex2jax.js'],
  jax: ['input/TeX', 'output/HTML-CSS'],
  messageStyle: 'none',
  tex2jax: {
    processEnvironments: false,
    processEscapes: true,
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  },
  TeX: {
    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js'],
    Macros: {
      RR: '{\\bf R}',
      bi: '\\leftrightarrow',
      Bi: '\\Leftrightarrow',
      bold: ['\\bf #1', 1],
      dint: '\\displaystyle \\int',
      dlim: '\\lim\\limits',
      inv: ['\\dfrac{1}{#1}', 1],
      lb: '\\left\\lbrack',
      rb: '\\right\\rbrack',
      To: '\\Rightarrow',
      ges: '\\geqslant',
      les: '\\leqslant'
    }
  },
  'HTML-CSS': {
    availableFonts: ['TeX'],
    styles: {
      '.MathJax_Display': { 'text-align': 'left', margin: '0.5em 0em' }
    }
  },
  displayAlign: 'left',
  displayIndent: '1em'
};

module.exports = `MathJax.Hub.Config(${JSON.stringify(config)});`;
