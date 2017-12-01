import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.css';

import registerServiceWorker from './registerServiceWorker';
import {
	 BrowserRouter as Router,
	 Route
	} from 'react-router-dom';

import Main from './view/Main';
import TimeLine from './view/TimeLine';
import Chatting from './view/Chatting/Chatting'
import EditBook from './view/EditBook'

ReactDOM.render((
  	<Router>
  		<div className='Router'>

  			<Route path="/timeLine" component={TimeLine}/>
  			<Route path="/chatting" component={Chatting}/>
	    	<Route path="/index" component={Main}/ >
        <Route path="/editBook" component={EditBook}/ >
  		</div>
  	</Router>
), document.getElementById('root'))
registerServiceWorker();
