window.MathJax = {
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)'],
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]'],
    ],
    processEscapes: true,
    tags: 'ams',
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process',
  },
  chtml: {
    scale: 1, // Global scaling factor
    mtextInheritFont: false, // true to make <mtext> elements use surrounding font
    merrorInheritFont: false, // true to make <merror> text use surrounding font
    mtextFont: '', // Font to use for <mtext> elements
    merrorFont: 'serif', // Font to use for <merror> elements
    unknownFamily: 'serif', // Font-family to use for unknown characters
    mathmlSpacing: false, // true for MathML spacing rules, false for TeX rules
    skipAttributes: {}, // RFDa and other attributes NOT to copy to the output
    exFactor: 0.5, // default size of ex in em units
    displayAlign: 'center', // default for indentalign when set to 'auto'
    displayIndent: '0', // default change in indentskip when indentalign is left or right
  },
};
