
import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'
import Menubar from '../layout/Menubar'
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import Container from '../layout/Container';
import Sidebar from '../layout/Sidebar';
import { Link } from 'react-router-dom';


export default function SigninSignup() {
    const name = useRef()
    const date = useRef()
    const email = useRef()
    const password = useRef()

    const [showHome,setShowHome] = useState(false)
    const [show,setShow] = useState(false)

const localsignUp = localStorage.getItem('signUp')
const localEmail = localStorage.getItem('email')
const localName = localStorage.getItem('name')
const localPassword = localStorage.getItem('password')

useEffect(()=>{
if(localsignUp){
    setShowHome(true)
}
if(localEmail){
    setShow(true)
}
})

    const handleClick=()=>{
        if(name.current.value&&date.current.value&&email.current.value&&password.current.value)
       {
        localStorage.setItem('name',name.current.value)
        localStorage.setItem('date',date.current.value)
        localStorage.setItem('email',email.current.value)
        localStorage.setItem('password',password.current.value)
        localStorage.setItem('signUp',email.current.value)
        alert('conta criada com sucesso')
        window.location.reload('/')
       }

    }

const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem('signUp',email.current.value)
        window.location.reload('/')
    }else{
        alert('Conta nao existe')
    }
}

  return (
    <div className='ll'>
  
<div className='lx'>
<div className='bg-[transparent] w-[100%] h-[70px] flex items-center pl-[20px]'><Link to='/discover'><HiOutlineArrowSmLeft style={{width:'24px', height:'24px', color:'white'}}/></Link></div>
        {showHome?<div className='flex flex-wrap'><Menubar/><Sidebar/><Container><Home/></Container></div>:
        (show?
        <div className='form'>
        <input type='text' placeholder='email' ref={email}/>
        <br/><br/>
        <input type='password' placeholder='password' ref={password}/>
        <br/><br/>
        <button onClick={handleSignIn}>Login</button>
        </div>
      :
      <div className='form'>
        <div className='flex gap-[30px]'>
      <input type='text' placeholder='Nome' ref={name} className='in'/>
      <br/>
      <br/>
      <input type='date' placeholder='Date' ref={date} className='in'/>
      </div>
      <br/><br/>
      <div className='insd'>
      <input type='text' placeholder='email' ref={email} className='ins'/>
      </div>
      <br/><br/>
      <input type='password' placeholder='password' ref={password} className='ins'/>
      <br/><br/>
      <button onClick={handleClick}>Crete occunt</button>
    </div>
        )
      }
      </div>
    </div>
  )
}