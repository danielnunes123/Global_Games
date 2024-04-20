import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { HiOutlineDownload } from "react-icons/hi";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { DiWindows } from "react-icons/di";
import { HiOutlineShare } from "react-icons/hi";
import Modal from '../layout/Modal';

export default function Gtav() {
  const [liked, setLiked] = useState(false)
  const [openModal, setOpenModal] = useState(false)



  const handleOnClick = () =>{
    setLiked(!liked)
  }
  return (
    <div  className='flex flex-wrap w-[100%] h-[1250px]'>
    <div className='w-[70%] p-[30px]'>
      <Carousel className='nn' infiniteLoop autoPlay showStatus={false} showIndicators={false}>
    <div className='imaged'>
    <img src='https://www.gamespark.jp/imgs/zoom/32332.jpg'/>
    </div>
    <div className='imaged'>
    <img src='https://image-cdn.essentiallysports.com/wp-content/uploads/gta-1-1.jpg?width=600'/>
    </div>
    <div className='imaged'>
    <img src='https://e3.365dm.com/18/04/768x432/skynews-grand-theft-auto-v_4279652.jpg?20180411094511'/>
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
  <br/>
  <br/>
<div>
  <h1 className='tt'>Grand Theft Auto V</h1>
  <br/>
  <img className='rounded-[10px]' src='https://encurtador.com.br/RXY39' draggable='false'/>
</div>
  </div>
  <div className=' w-[30%] pt-[80px]'> 
  <div className='w-[100%] h-[max-content] flex justify-center items-center'>  <img className='w-[150px]' src='https://pngimg.com/d/gta_PNG13.png' draggable='false'/></div>
  <br/>
  <br/>
<div>
  <span className='oo'>Jogo básico</span>
</div>
<br/>
<div className='flex flex-wrap gap-[10px]'>
<button className='bni'><HiOutlineDownload style={{width:'19px', height:'19px'}}/>Download</button>
<button className='bnt' onClick={handleOnClick}>{liked ?  <VscHeart  style={{width:'19px', height:'19px'}}/> : <VscHeartFilled  style={{width:'19px', height:'19px'}}/>}Adicionar aos favoritos</button>
<br/>
<span className='h'>Sobre o jogo<AiOutlineInfoCircle style={{width:'15px', height:'15px'}}/></span>
<span className='h1'>
 <span className='w-[100%]'> Desenvolvedora </span>
<span className='bb'>
Estudio escocés Rockstar North y
<br/>
distribuido por Rockstar Games.
</span>
</span>
<span className='h2'>
  <span className='ttd'>Editora</span>
  <span className='lo'>Rockstar Games</span>
</span>
<span className='h2'>
  <span className='ttd'>Disponível</span>
  <span className='lo'>12/07/23</span>
</span>
<span className='h2'>
  <span className='ttd'>Plataforma</span>
  <span className='lo'><DiWindows  style={{width:'18px', height:'18px'}}/></span>
</span>
</div>
<br/>
<div className='w-[100%] flex justify-center'>
<button className='bna'   onClick={()=> setOpenModal(true)}><HiOutlineShare style={{width:'15px', height:'15px'}}/> Partilhar</button>
</div>
  </div>
  <Modal isOpen={openModal} isClose={()=> setOpenModal(false)}/>
  </div>

  )
}
