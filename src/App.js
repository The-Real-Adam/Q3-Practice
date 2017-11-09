import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'


class App extends Component {

  constructor(props){
    super(props)
    this.state= {messages: []}
  }

  async componentDidMount() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`)
      const json = await response.json()
      this.setState({messages: json})
    }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList messages = {this.state.messages} />
      </div>
    );
  }
}


export default App;
