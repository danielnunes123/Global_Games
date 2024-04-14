import React from 'react'
import  fortnit from './images/Fornite-PS5-Xbox-Series-X-ameliorations-removebg-preview 1.png'
import logof from './images/fortnite-logo-black-png.png'
import Carrousel from '../layout/Carrousel'
import Carrousela from '../layout/Carrousela'

export default function Home() {
  return (
    <div className='h-[3000px]'> 
   <div id='anu' className='w-[100%] h-[415px] rounded-[30px] bg-gradient-to-t from-fuchsia-500 via-violet-600 to-violet-600 p-[10px] flex justify-between' >
    <div id='textanu'><img draggable='false'  className='w-[300px]' src={logof}/>
    <p className='w-[354px] text-white'>
    Fortnite é um jogo de batalha real gratuito em que 100
jogadores lutam até o último homem ou equipe de pé
Os jogadores podem construir estruturas para se
protegerem ou para atacar seus oponentes
      </p>
      <button className='bg-white w-[76px] h-[38px] rounded-[30px]'>Get</button>
      </div><img src={fortnit}  draggable='false' className='w-[600px] relative top-[11px]'/>
   </div>
   <br/>
   <br/>
<Carrousel/>
<br/>
<br/>
<br/>
<br/>
<Carrousela/>
    </div>
  )
}
