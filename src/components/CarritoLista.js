import React, { useContext } from 'react';
import CarritoItem from './CarritoItem';
import carritoContext from '../context/carritoContext';


const CarritoLista = () => {

    const { carrito } = useContext(carritoContext);

    return carrito.map( (item) =>
        <CarritoItem
            key={item.articulo_id}
            item={item}
        />
    );

}

export default CarritoLista;