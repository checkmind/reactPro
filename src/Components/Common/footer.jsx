import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import '../../styles/footer.less'

class Child extends Component {
  render() {

    return (<div className='footer'>
    			<Link to='/timeLine'>追忆</Link>
    			<Link to='/chatting'>雁书</Link>
    			<Link to='/index'>吾</Link>
    		</div>)
  }
  componentWillMount() {
  	
  }
}

export default Child