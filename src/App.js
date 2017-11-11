import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'
import AddMessage from './components/AddMessage'



class App extends Component {

  constructor(props){
    super(props)
    this.state= {messages: [], filtered: []}
  }

  async componentDidMount() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/messages`)
      const json = await response.json()
      this.setState({messages: json, filtered: json})
    }

  seeker = (searchTerm) => {
    const match = this.state.messages.filter(message => {
      return (message.name.toLowerCase().includes(searchTerm.toLowerCase())) || (message.message.toLowerCase().includes(searchTerm.toLowerCase()))
    })
    this.setState({
      filtered: [...match]
    })
  }

  toggleCompose() {
     this.setState({composing: !this.state.AddMessage})

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
    window.location.reload()
    this.setState({messages: [...this.state.messages, message1],
    composing: false})
  }

  deleteMessages = async (e) => {
    e.preventDefault()
    var index = +(e.currentTarget.id)
    const response = await fetch(`${process.env.REACT_APP_API_URL}/messages/${index}`,  {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      }
    })
     let idx
    for(let i = 0; i < this.state.messages.length; i++) {
      if (this.state.messages[i].id === index) {
       idx = i
      }
    }
    window.location.reload()
    this.setState({
      messages: [
        ...this.state.messages.slice(0, idx),
        ...this.state.messages.slice(idx + 1)
      ]
    })
    console.log('this.state is: ', this.state);
  }



  toggleCompose() {
     this.setState({composing: !this.state.composing})
   }

  render() {
    return (
      <div className="App">

        <Toolbar
        seeker = {this.seeker.bind(this)}
        toggleCompose = {this.toggleCompose.bind(this)}
        />

        {
          this.state.composing ?
          <AddMessage createMessage={ this.createMessage.bind(this)} /> : null
        }

        <MessageList
        messages = {this.state.filtered}
        deleteMessages ={this.deleteMessages.bind(this)}
        />

      </div>
    );
  }
}


export default App;
