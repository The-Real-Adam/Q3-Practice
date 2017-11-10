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

  createMessage = async (message) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`, {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const message1 = await response.json()
    // console.log('this.state', this.state);
    this.setState({messages: [...this.state.messages, message1]})
  }

  deleteMessages = async (message) => {
    
  }

  render() {
    return (
      <div className="App">
        <Toolbar />
        <MessageList
        messages = {this.state.messages}
        deleteMessages ={this.deleteMessages}
        />

        <AddMessage createMessage = {this.createMessage} />
      </div>
    );
  }
}


export default App;
