import React, { Component } from 'react';

import Child from './Components/child'

import './App.css';
const username = '杜浩'
const hobbyList = ["打球","玩游戏","看电影"]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Child username={username}>{hobbyList}</Child>
        <header className="App-header">
          <h1 className="App-title">My First React API</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code lang='javascript'>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
