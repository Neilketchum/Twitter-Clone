import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

export default function App() {
  return (
    <div className = 'app'>
      {/* SideBar */}
      <Sidebar/>
      {/* Feed */}
      <Feed></Feed>
      {/* Widgets */}
    </div>
  )
}
