import React, { useContext } from 'react';
import carritoContext from '../../context/carritoContext';

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
            <td>{item.precio}</td>
            <td>{item.cantidad}</td>
            <td>{item.subtotal}</td>

        </tr>

    );
}

export default CarritoItem;