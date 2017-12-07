import React, { Component } from 'react';
import {template} from '../mixins/template'

import Myhead from '../Components/Common/header'
import MyFoot from '../Components/Common/footer'
import Mybody from '../Components/Common/bodyer'

import  '../styles/module/main.less'

class App extends Component {
  constructor(props, context){
  	super(props, context)
  	console.log(this.props)
  }
  render() {
    return (
      <div className="App">
        <div className='bodyer'>吾</div>
        <MyFoot page='2'/>
      </div>
    );
  }
}


export default template({
    component: App
});
