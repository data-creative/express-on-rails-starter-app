require("../app/assets/stylesheets/style.css");

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from '../app/components/Hello.jsx';

ReactDOM.render(
  <Hello/>,
  document.getElementById('hello')
);
