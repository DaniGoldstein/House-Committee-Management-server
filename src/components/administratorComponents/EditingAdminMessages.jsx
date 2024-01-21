import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../Layout'
export default function EditingAdminMessages() {
    const { messages, setMessages } = useContext(dataContext)

    const handleTitleDelete =(title)=>{
       const filter = Object.values(messages).filter(message=>message.title!==title);
       console.log(filter);
       setMessages(filter)
        
       
    }
    return (
        <div className='adminMessages' >
        {messages && Object.values(messages).map((message,key) =>
        <div>
          <div>{ message.title}</div>
          <div>{message.date}</div> 
          <div onClick={()=>handleTitleDelete(message.title)}>delete</div>
          </div> )
          }
          
    </div>
    )
}
