import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../Layout';

export default function HomeContent() {
  const { messages } = useContext(dataContext)
  return (
    <div style={{width:"80%" ,height:"50%", border:"10px solid", marginTop:"100px"}}>
        {messages && Object.values(messages).map((message,key) =>
        <div>
          <div>{ message.title}</div>
          <div>{message.date}</div> </div>)}
    </div>
  )
}
