import React from 'react';
import {Link } from 'react-router-dom';

const CategoriasGridItem = ({ item }) => {

    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src={`images/${item.ruta}`} ></img>
            <p>{item.descripcion}</p>
            <Link to={`categorias/${item.tipo}`}>
                <p>Ver mas...</p>
            </Link>
        </div>
    );
}

export default CategoriasGridItem;