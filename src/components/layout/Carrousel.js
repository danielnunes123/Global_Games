import React, { useState, useEffect, useRef } from 'react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Carrousel() {
const [data, setData] = useState([]);
const carrousel = useRef(null);





useEffect(()=>{
    fetch('http://localhost:3000/static/shoes.json')
    .then((response)=>response.json())
    .then(setData)
},[])

const handleLeftClick = (e) =>{
e.preventDefault();
carrousel.current.scrollLeft += carrousel.current.offsetWidth;
}

const handleRightClick = (e) =>{
e.preventDefault();
carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
}

if(!data || !data.length) return null;
  return (
    <div>
        <div className='w-[350px]'>
        <h1 id='gamect'>Jogos De Mundo Aberto</h1>
        <button id='btnmais'>Ver mais</button>
        </div>
        <br/>
        <div className='w-[max-content] flex gap-5 '>
        <button className=' h-[32px] pl-[11px] pr-[11px] rounded-[10px] bg-[#5F32C9] ' onClick={handleRightClick} ><RiArrowLeftSLine  style={{color: 'white', width:'25px',  height:'25px'}}/></button>
        <button  className='h-[32px] pl-[11px] pr-[11px] rounded-[10px] bg-[#5F32C9] '  onClick={handleLeftClick}><RiArrowRightSLine  style={{color: 'white', width:'25px',  height:'25px'}}/></button>
        </div> 
        
 
            <br/>
            <div className='carrousel' ref={carrousel}>
    {data.map((item)=>{
        const {id,name,category,image, url} = item;
        return (
            <div key={id} className='w-[321px] h-[259px] bg-[#121423] rounded-[20px] flex items-center justify-center flex-none'>
            <div >
              <img src={image} draggable='false' className='w-[289.78px] h-[163px] rounded-[15px]'/>
              <br/>
              <div className='flex justify-between'>
                <div>
              <span className='gamename'>{name}</span>
              <br/>
              <span className='category'>{category}</span>
              </div>
              <button id='btnget' className='bg-[#683CCF] w-[65px] h-[29px] rounded-[15px]'><Link to={url}>Get</Link></button>
            </div>
            </div>
            </div>
        )
    })}
</div>
    </div>
  )
}
