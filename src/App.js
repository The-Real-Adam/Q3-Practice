import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import AddMessage from './components/AddMessage'



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

  async createItem(item) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const message = await response.json()
    this.setState({messages: [...this.state.messages, message]})
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <AddMessage />
        <MessageList messages = {this.state.messages} />
      </div>
    );
  }
}


export default App;
