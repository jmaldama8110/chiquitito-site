import React from 'react';

const CatalogoPublicoItem = ({ item }) => {

    return (
        <div>
            <img src='images/telas/17.jpg'></img>
            <h3> {item.nombre_producto}</h3>
            <p> {item.descripcion}
                ${item.precio}
            </p>
            <button
                onClick={ ()=> alert('Agregar al carrito!')}
            >Al Carrito</button>
        </div>

    );
}

export default CatalogoPublicoItem;