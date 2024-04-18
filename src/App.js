import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Container from './components/layout/Container';
import Sidebar from './components/layout/Sidebar';
import Menubar from './components/layout/Menubar';
import Novos from './components/pages/Novos';
import Favoritos from './components/pages/Favoritos';
import Definicao from './components/pages/Definicao';
import Meusjogos from './components/pages/Meusjogos';

function App() {
  return (
<Router>
  <div className='flex flex-wrap'>
    <Menubar/>
    <Sidebar/>
    <Container>
      <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/novos'  element={<Novos/>}/>
    <Route path='/discover'  element={<Home/>}/>
    <Route path='/favoritos'  element={<Favoritos/>}/>
    <Route path='/definição'  element={<Definicao/>}/>
    <Route path='/meusjogos'  element={<Meusjogos/>}/>
  </Routes>
  </Container>
  </div>
</Router>
  );
}

export default App;
