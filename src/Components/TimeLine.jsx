import React, { Component } from 'react';
import Myhead from './Common/header'
import MyFoot from './Common/footer'
import Mybody from './Common/bodyer'


import  '../styles/module/timeline.less'

class TimeLine extends Component {
  render() {

    return (
      <div className="timeline">
        <div className='bodyer'>
            <div className='mailBody'>
                <li>奉天承运，皇帝赵越</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </div>
        </div>
        <MyFoot/>
      </div>
    );
  }
}

export default TimeLine;
