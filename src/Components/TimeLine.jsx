import React, { Component } from 'react';
import Myhead from './Common/header'
import MyFoot from './Common/footer'
import Mybody from './Common/bodyer'

import  '../styles/module/main.less'

class TimeLine extends Component {
  render() {
  	let headText = '此情可待成追忆'
    return (
      <div className="App">
      	<Myhead headText={headText} />
        <div className='bodyer'>这是时间线</div>
        <MyFoot/>
      </div>
    );
  }
}

export default TimeLine;
