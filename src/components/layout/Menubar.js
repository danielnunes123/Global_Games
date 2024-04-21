import React from 'react'
import { Link } from 'react-router-dom'
import Conta from './Conta'

export default function Menubar() {
  return (
    <div className='bg-[#1C1E2A] w-[100%] h-[79px] shadow-[0px_4px_7px_0px_#13161FED] z-20'>
    <button><Link to='/register'>entrar</Link></button>
    <Conta />
  </div>
  )
}
