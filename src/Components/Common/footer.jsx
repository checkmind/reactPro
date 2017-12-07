import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import '../../styles/footer.less'

class Child extends Component {
  constructor(props, context){

    super(props, context);   
    console.log(this.props) 
  }
  render() {
    let classname = [];
    let {unRead,page} = this.props;
    
    let unReadInf = ''
    classname[+page] = 'chooseLink';
    if(!unRead)
      unReadInf = '';
    else{
      if(unRead>=99)
        unRead = '99+'
      unReadInf = <span>{unRead}</span>;
    }
    return (<div className='footer'>
    			<Link to='/timeLine' className={classname[0]}>追忆</Link>
    			<Link to='/chatting' className={classname[1]}>雁书{unReadInf}</Link>
    			<Link to='/index' className={classname[2]}>吾</Link>
    		</div>)
  }
  componentWillMount() {
  	
  }
}

export default Child