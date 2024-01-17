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
        <div style={{width:"80%" ,height:"50%", border:"10px solid blue", marginTop:"100px"}}>
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
