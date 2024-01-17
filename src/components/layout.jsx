import React from 'react'
import { Route, Routes } from 'react-router'
import { useState, useEffect ,createContext} from 'react'
import messagesData from '../data/messages.json'
import Home from './homeComponents/Home';
import Administrator from './administratorComponents/Administrator';

export const dataContext = createContext();



function Layout() {
 

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const dataMessage = messagesData;
    setMessages(dataMessage)
    
  },[]);
  return (
    <><dataContext.Provider value={{ messages, setMessages }}>

      < Routes >
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Administrator/>} />
        {/* <Route path='/:userName' element={<User/>}/> */}
      </ Routes >
    </dataContext.Provider>


    </>
  )
}

export default Layout
