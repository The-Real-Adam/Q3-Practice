import React from 'react'
import Message from './Message'

const MessageList = ({messages, deleteMessages}) => {

  const mappedMessages = messages.map((message) =>
    <Message
    key={message.id}
    message={message}
    deleteMessages={deleteMessages}
    />
  )

  return (
    <div>
      {mappedMessages}
    </div>
  )

}

export default MessageList
