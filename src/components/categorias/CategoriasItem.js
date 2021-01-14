import React from 'react';
import { Link } from 'react-router-dom';

const CategoriasItem = ({ item }) => {

    return (
        <div className='card-categoria'>
            <Link to={`categorias/${item.tipo}`}>
                <img src={`images/${item.ruta}`} alt=''></img>
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
            </Link>
        </div>
    );
}


export default CategoriasItem;