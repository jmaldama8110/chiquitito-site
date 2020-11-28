import React from 'react';
import {Link } from 'react-router-dom';

const CategoriasItem = ({ item }) => {

    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src={`images/${item.ruta}`} alt=''></img>
            <p>{item.descripcion}</p>
            <Link to={`categorias/${item.tipo}`}>
                <p>Ver mas...</p>
            </Link>
        </div>
    );
}

export default CategoriasItem;