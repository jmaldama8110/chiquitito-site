import React from 'react';
import {Link } from 'react-router-dom';

const CategoriasItem = ({ item }) => {

    return (
        <div className='card'>
            <img src={`images/${item.ruta}`} alt='' style={{width:'100%'}}></img>
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
            <Link to={`categorias/${item.tipo}`}>
                <p>Ver mas...</p>
            </Link>
        </div>
    );
}

export default CategoriasItem;