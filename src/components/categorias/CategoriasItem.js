import React from 'react';
import { Link } from 'react-router-dom';

const CategoriasItem = ({ item }) => {

    return (
        <div className='card-categoria'>
            <Link to={`categorias/${item.tipo}`}>
                <img src={`images/${item.ruta}`} alt=''></img>
            </Link>
            <h1>{item.nombre}</h1>
            <p>{item.descripcion}</p>
    </div>
    );
}


export default CategoriasItem;