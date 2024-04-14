import React from 'react'
import { CgGames } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { CgPlayListAdd } from "react-icons/cg";
import { AiOutlineAppstore } from "react-icons/ai";

export  const Sidebardata = [


{
    title:'Discover',
    link:'/discover',
    icon:<CgGames />,
},
{
    title:'Meus jogos',
    link:'/meusjogos',
    icon:<CgGames  style={{width:'20px', height:'20px'}}/>,
},
{
    title:'Novos',
    link:'/novos',
    icon:<CgPlayListAdd  style={{width:'22px', height:'22px'}}/>,
},
{
    title:'Favoritos',
    link:'/favoritos',
    icon:<AiOutlineAppstore style={{width:'20px', height:'20px'}}/>,
},
{
    title:'Definição',
    link:'/definição',
    icon:<AiOutlineSetting style={{width:'20px', height:'20px'}}/>,
}


]
