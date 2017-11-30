import React, { Component } from 'react';
import Myhead from '../Components/Common/header'
import MyFoot from '../Components/Common/footer'
import Mybody from '../Components/Common/bodyer'

/* 竹简 */
import MailBody from '../Components/mailbody'

import  '../styles/module/timeline.less'

class TimeLine extends Component {
	
	constructor(){
		super();
		
	}	
	render() {
		return (
		  <div className="timeline">
		    <div className='bodyer'>
		        <MailBody/>
		    </div>
		    <MyFoot/>
		  </div>
		);
	}
}

export default TimeLine;
