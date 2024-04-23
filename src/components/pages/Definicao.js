import React from 'react'
import { Link } from 'react-router-dom'
import Conta from '../layout/Conta'
import { useState } from 'react'

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
 <div>
  {/*
    <button onClick={logout}><Link to='/'>logout</Link></button>
      <br/>
  <button onClick={desactive}><Link to='/'>delet</Link></button> 
*/}
 </div>
  )
}
