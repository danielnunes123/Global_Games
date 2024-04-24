import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

export default function Definicao() {
  const logout=()=>{
    localStorage.removeItem('signUp')
    window.location.reload()
  }
  const desactive=()=>{
    localStorage.clear()
    window.location.reload()
  }
  return (
 <div className='ll'>

  
 <div>
      <button onClick={logout}><Link to='/'>logout</Link></button>
      <br/>
  <button onClick={desactive}><Link to='/'>delet</Link></button>
  </div> 
 

 </div>
  )
}
