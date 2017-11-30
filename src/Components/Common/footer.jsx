import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import '../../styles/footer.less'

class Child extends Component {
  render() {
    let classname = [];
    let page = this.props.page;
    classname[+page] = 'chooseLink';
    return (<div className='footer'>
    			<Link to='/timeLine' className={classname[0]}>追忆</Link>
    			<Link to='/chatting' className={classname[1]}>雁书</Link>
    			<Link to='/index' className={classname[2]}>吾</Link>
    		</div>)
  }
  componentWillMount() {
  	
  }
}

export default Child