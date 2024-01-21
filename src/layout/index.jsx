import React from 'react'
// import { Route, Routes } from 'react-router'
import { useState, useEffect, createContext } from 'react'
import messagesData from '../data/messages.json'
// import Administrator from './components/administratorComponents/Administrator';
import Header from './header/Header'
import Content from './content/Content';
import Secondary from './secondary/Secondary';
// export const dataContext = createContext();



function Layout() {


  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   const dataMessage = messagesData;
  //   setMessages(dataMessage)

  // }, []);

  return (
    // <><dataContext.Provider value={{ messages, setMessages }}>
    <>
      <Header />
      <Content />
      <Secondary />
   
    </>
  )
}

export default Layout
