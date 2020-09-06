import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

export default function App() {
  return (
    <div className = 'app'>
      {/* SideBar */}
      <Sidebar/>
      {/* Feed */}
      <Feed></Feed>
      {/* Widgets */}
      <Widgets></Widgets>
   
    </div>
  )
}
