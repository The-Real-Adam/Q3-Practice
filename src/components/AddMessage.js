import React from 'react'

const AddMessage = ({createMessage}) => {
  const handleAddMessage = (event) =>{
    event.preventDefault()
    const newMessage = {
      name: event.target.name.value.trim(),
      message: event.target.message.value.trim()
    }
    console.log('new message is:', newMessage);
    createMessage(newMessage)
    event.target.reset
  }
  return(
    <div>
      <form onSubmit = {handleAddMessage}>
        <input name='name' placeholder='Name' id="name"/>
        <input message='message' placeholder='Message' id="message" />
        <input type='submit' value='Add' />
      </form>
    </div>
  )
}

export default AddMessage
