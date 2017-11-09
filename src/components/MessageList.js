import React from 'react'
import Message from './Message'

const MessageList = ({messages}) => {

  const mappedMessages = messages.map((message) =>
    <Message
    key={message.id}
    message={message} />
  )

  return (
    <div>
      {mappedMessages}
    </div>
  )

}

export default MessageList
