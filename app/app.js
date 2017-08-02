import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import MainContainer from './main.container';

ReactDOM.render(
  <Router>
    <MainContainer />
  </Router>,
  document.getElementById('root')
);
