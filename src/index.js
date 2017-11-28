import React from 'react';
import ReactDOM from 'react-dom';
import './styles/common.css';

import registerServiceWorker from './registerServiceWorker';
import {
	 BrowserRouter as Router,
	 Route
	} from 'react-router-dom';

import Main from './Components/Main.jsx';
import TimeLine from './Components/TimeLine.jsx';
import Chatting from './Components/Chatting/Chatting'

ReactDOM.render((
  	<Router>
  		<div className='Router'>
  			<Route path="/timeLine" component={TimeLine}/>
  			<Route path="/chatting" component={Chatting}/>
	    	<Route path="/index" component={Main}/ >
  		</div>
  	</Router>
), document.getElementById('root'))
registerServiceWorker();
