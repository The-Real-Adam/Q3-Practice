import React from 'react'

const Message = ({message, deleteMessages}) => {
  return (
    <div>
      <i>Message:</i> {message.message}
      <br/>
      <i>Name:</i> {message.name}
      <br/>
      <button onClick={deleteMessages} id={message.id}> delete </button>
      <br/>
    </div>
  )
}

export default Message
