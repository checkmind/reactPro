import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory } from 'react-router-dom';
console.log(hashHistory)

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/index" component={App}/>
  </Router>
), document.getElementById('root'))
registerServiceWorker();
