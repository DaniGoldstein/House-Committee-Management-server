import React from 'react'
import style  from './style.module.css'
import { Route, Routes } from 'react-router'
import Messages from '../../pages/messages/Messages'
import PaymentDetails from '../../pages/paymentDetails/PaymentDetails'

export default function Content() {
  return (<>
       
       
    <div className={style.content}>content
    <div  className="text-7xl  underline">tailwind</div>
          <Routes>
<Route path='homePortal/messages' element={<Messages/>}>   </Route>
<Route path='homePortal/paymentDetails' element={<PaymentDetails/> }></Route>
          </Routes>
        
    </div></>
  )
}
