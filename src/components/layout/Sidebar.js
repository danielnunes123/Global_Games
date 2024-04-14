import React from 'react'
import { Sidebardata } from './Sidebardata'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

  return ( 
           <div id='Sidebar'  className='bg-[#1C1E2A] w-[20%] h-[100vh] shadow-[0px_4px_7px_0px_#13161FED] z-10'>
            <ul id='Sidebarlist'>
         {Sidebardata.map((val, key)=>{
          return(
           <NavLink activeClassName="active"  className='row' key={key} to={val.link}><div id='icon'> {val.icon}</div> <li id='title'> {val.title}</li></NavLink>
          )
         })}
         </ul>
         </div>
  )
}
