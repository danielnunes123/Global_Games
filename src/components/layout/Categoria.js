import React, { useEffect, useState } from 'react';
import Carrousel from './Carrousel';
import Carrousela from './Carrousela';

export default function Categoria() {
    const [data, setData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/static/gategory.json')
            .then((response) => response.json())
            .then(setData)
            .catch(error => console.error('Erro ao carregar dados:', error));
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <>
            <select onChange={handleCategoryChange} className='list'>
                {data.map((item) => (
                    <option className='opt' key={item.id}>{item.name}</option>
                ))}
            </select>
            <br/>
            <br/>
            <br/>
            <br/>
            {selectedCategory === 'Mundo aberto' && <Carrousel />}
            {selectedCategory === 'FPS' && <Carrousela />}
            {selectedCategory === 'Tudo' && (<>
                <Carrousel/> 
             <br/>
             <br/>
             <br/>
             <br/>
             <Carrousela />
              </>
            )}
        </>
    );
}