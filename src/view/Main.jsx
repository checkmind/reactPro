import React, { Component } from 'react';
import Myhead from '../Components/Common/header'
import MyFoot from '../Components/Common/footer'
import Mybody from '../Components/Common/bodyer'

import  '../styles/module/main.less'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='bodyer'>吾</div>
        <MyFoot/>
      </div>
    );
  }
}

export default App;
