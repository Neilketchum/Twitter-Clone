import React from 'react'
import './SidebarOption.css'
export default function SidebarOptions({text,Icon,active}) {
    return (
        <div className = {`sidebarOptions ${active&& 'isActive'}`}>
            <Icon></Icon>
            <h2>{text}</h2>
        </div>
    )
}
