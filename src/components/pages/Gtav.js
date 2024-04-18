import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Gtav() {
  return (
    <div  className='flex flex-wrap w-[100%] h-[3000px]'>
    <div className='w-[70%] p-[30px]'>
      <Carousel className='nn' infiniteLoop autoPlay showStatus={false} showIndicators={false}>
    <div className='imaged'>
    <img src='https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg'/>
    </div>
    <div className='imaged'>
    <img src='https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg'/>
    </div>
    <div className='imaged'>
    <img src='https://assets.xboxservices.com/assets/0b/17/0b179504-412d-4af7-9e00-3e3d92633577.jpg?n=GTA-V_GLP-Page-Hero-1084_1920x1080.jpg'/>
    </div>
  </Carousel>
  <br/>
  <p className='inf'>
  GTA 5 é um jogo de mundo aberto ambientado na cidade de Los Santos,
uma representação fictícia de Los Angeles. Os jogadores podem assumir o
controle de três personagens diferentes, cada um com suas próprias habilidades e personalidades. 
O jogo oferece uma variedade de atividades para os jogadores, incluindo assaltos, corridas, missões 
secundárias e muito mais.
  </p>
  <br/>
  <br/>
  <div className='flex gap-[200px] w-[100%]'>
    <div className='border-[#683CCF] border-l-[1px] pl-[10px] text-white'>
      <span className='gc'>Género</span>
  <br/>
      <span className='k'>Acção e Mundo livre</span>
    </div>
    <div  className='border-[#683CCF] border-l-[1px] pl-[10px] text-white'>
    <span className='gc'>Características</span>
  <br/>
    <span className='k'>Cooperativa - Multe jogador</span>
    </div>
  </div>
  </div>
  <div className='bg-[green] w-[30%]'> wivcgfcdgdf</div>
  </div>

  )
}
