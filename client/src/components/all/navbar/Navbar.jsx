import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom';

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";



export  default function Navbar() {
  return (
  
 
      <div className={style.sidebar}>
      <ul>
        <li>
          <Link to="homePortal/messages">הודעות    ועד-הבית</Link>
        </li>
        <li>
          <Link to="/about">הודעות דיירים</Link>
        </li>
        {/* Add more links as needed */}
        <li>
          <Link to="/about">  צור הודעה חדשה </Link>
        </li>
        <li>
          <Link to="/about">דוחו"ת כספיים</Link>
        </li>
      
        <li>
          <Link to="/about">    פירוט תשלומים </Link>
        </li>
        <li>
          <Link to="homePortal/neighborsDetails">    פרטי דיירים</Link>
        </li>
        <li>
          <Link to="/about">    עדכן פרטי תשלום</Link>
        </li>
      </ul>
    </div>
      );
    
  };
  

