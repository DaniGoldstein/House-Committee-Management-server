import React from 'react'
// import { useContext } from 'react'

import messages from '../../data/messages';
export default function Messages() {

  // const { messages } = useContext(dataContext)


  return (
    <div>
       {messages && Object.values(messages).map((message,key) =>
        <div>hdthdt
          <div className="">{ message.title}</div>
          <div>{message.date}</div> </div>)}
    </div>
  )
}
