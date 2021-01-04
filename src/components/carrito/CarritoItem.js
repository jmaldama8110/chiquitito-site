import React, { useContext } from 'react';
import carritoContext from '../../context/carritoContext';
import CarritoItemCantidad from './CarritoItemCantidad';

const CarritoItem = ({ item }) => {

    const { dispatchCarrito } = useContext(carritoContext);


    return (
        <tr>
            <span className='close'
                onClick={() => dispatchCarrito({
                    type: "REMOVE_CARRITO",
                    articulo_id: item.articulo_id
                })} >&times;</span>
            <td>{item.nombre_producto}</td>
            <td>{item.imagen_titulo}</td>
            <td>{item.precio}</td>
            <td><CarritoItemCantidad item={item} /></td>
            <td>{item.unidad}</td>
            <td>{item.subtotal}</td>

        </tr>

    );
}

export default CarritoItem;