import React from 'react'

const Message = ({message}) => {
  return (
    <div>
    {message.message}
    {message.name}
    </div>
  )
}

export default Message
