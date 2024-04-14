import React from 'react'

export default function Container(props) {
  return  <div className='bg-[#1C1E2A] w-[80%] max-h-[100vh] p-[20px] overflow-y-scroll'>{props.children}</div>
  
}
