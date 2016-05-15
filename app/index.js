require("../app/assets/stylesheets/style.css");

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from '../app/components/Hello.jsx';

ReactDOM.render(
  <Hello/>,
  document.getElementById('hello')
);


// https://webpack.github.io/docs/hot-module-replacement.html
//if (module.hot) {
  module.hot.accept(); // avoids "[HMR] The following modules couldn't be hot updated: (Full reload needed) This is usually because the modules which have changed (and their parents) do not know how to hot reload themselves." error
//}
