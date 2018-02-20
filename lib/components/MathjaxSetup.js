import React from 'react';
import config from './config';

const MathjaxSetup = () => {
  const configStr = JSON.stringify(config);
  const mjConfig = `MathJax.Hub.Config(${configStr})`;
  const html = { __html: mjConfig };
  return (
    <React.Fragment>
      <script type="text/x-mathjax-config" dangerouslySetInnerHTML={html} />
      <script
        type="text/javascript"
        async
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML"
      />
    </React.Fragment>
  );
};

export default MathjaxSetup;
