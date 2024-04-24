
import React, { useEffect, useRef, useState } from 'react'
import Home from './Home'
import Menubar from '../layout/Menubar'
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import Container from '../layout/Container';
import Sidebar from '../layout/Sidebar';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { FiEye } from "react-icons/fi";


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
  
<div className='lx'>

        {showHome?<div className='flex flex-wrap'><Menubar/><Sidebar/><Container><Home/></Container></div>:
        (show?
          <div>
          <div className='bg-[transparent] w-[100%] h-[70px] flex items-center pl-[20px]'><Link to='/discover'><HiOutlineArrowSmLeft style={{width:'24px', height:'24px', color:'white'}}/></Link></div>
        <div className='form'>
        <br/>
        <div className='csu'>
        <p className='yf'>Entrar agora</p>
        
        <h1 className='yg'>Entrar</h1>
        
        <p className='yf'>Sejá bem <e className='text-[#5F32C9]'>vindo</e></p>
        </div>
        <br/>
        <div className='insd'>
      <input type='text' placeholder='email' ref={email} className='ins'/>
      <MdOutlineEmail style={{width:'18px', height:'18px'}}/>
      </div>
        <br/>
        <div className='insd'>
      <input type='password' placeholder='password' ref={password} className='ins'/>
      <FiEye style={{width:'18px', height:'18px'}}/>
      </div>
        <br/><br/>
        <div className='flex gap-[76px]'>
        <button onClick={desactive} className='ine'><Link to='/'>Não tenho conta</Link></button> 
        <button onClick={handleSignIn} className='ini'>Entrar</button>
       </div>
        </div>
        </div>
      :
      <div>
      <div className='bg-[transparent] w-[100%] h-[70px] flex items-center pl-[20px]'><Link to='/discover'><HiOutlineArrowSmLeft style={{width:'24px', height:'24px', color:'white'}}/></Link></div>
      <div className='form'>
        <br/>
        <div className='csy'>
        <p className='yf'>Entrar agora</p>
        
        <h1 className='yg'>Criar  nova conta</h1>
        
        <p className='yf'>Sejá bem <e className='text-[#5F32C9]'>vindo</e></p>
        </div>
        <br/>
        <div className='flex gap-[43px]'>
      <input type='text' placeholder='Nome' ref={name} className='in'/>
      <br/>
      <input type='date' placeholder='Date' ref={date} className='in'/>
      </div>
      <br/>
      <div className='insd'>
      <input type='text' placeholder='email' ref={email} className='ins'/>
      <MdOutlineEmail style={{width:'18px', height:'18px'}}/>
      </div>
      <br/>
      <div className='insd'>
      <input type='password' placeholder='password' ref={password} className='ins'/>
      <FiEye style={{width:'18px', height:'18px'}}/>
      </div>
      <br/><br/>
      <div className='flex gap-[76px]'>
      <button onClick={logout} className='ine'><Link to='/'>Já tenho uma conta</Link></button>
      <button onClick={handleClick} className='ini'>Criar conta</button>
      </div>
      
    </div>
    </div>
        )
      }
      </div>
    </div>
  )
}