module.exports = {
  extensions: ['tex2jax.js'],
  jax: ['input/TeX', 'output/HTML-CSS'],
  messageStyle: 'none',
  tex2jax: {
    processEnvironments: false,
    processEscapes: true
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
    availableFonts: ['TeX']
  },
  displayAlign: 'left',
  displayIndent: '1em'
}
