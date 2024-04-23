{/*
import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'
import Menubar from '../layout/Menubar'
import { HiOutlineArrowSmLeft } from "react-icons/hi";


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
    <div>
  

        {showHome?<Home/>:
        (show?
             <div className='bg-transparent h-[max-content] w-[100%] pl-[40px]'>
        <input type='text' placeholder='email' ref={email}/>
        <br/><br/>
        <input type='password' placeholder='password' ref={password}/>
        <br/><br/>
        <button onClick={handleSignIn}>Login</button>
      </div>
      :
      <div>
      <input type='text' placeholder='Nome' ref={name}/>
      <br/>
      <br/>
      <input type='date' placeholder='Date' ref={date}/>
      <br/><br/>
      <input type='text' placeholder='email' ref={email}/>
      <br/><br/>
      <input type='password' placeholder='password' ref={password}/>
      <br/><br/>
      <button onClick={handleClick}>Crete occunt</button>
    </div>
        )
      }
      
    </div>
  )
}
*/}