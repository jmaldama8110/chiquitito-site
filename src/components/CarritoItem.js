import React, { useContext } from 'react';
import carritoContext from '../context/carritoContext';

const CarritoItem = ({ item }) => {

    const { dispatchCarrito } = useContext(carritoContext);

    return (
        <div>
            <div className="content-contenedor">
                <div className="catalogo_lista_item">
                    <div>{item.nombre_producto}</div>
                    <div>{item.precio}</div>
                    <div>{item.cantidad}</div>
                    <div>{item.subtotal}</div>
                    <button
                        onClick={() => dispatchCarrito({
                            type: "REMOVE_CARRITO",
                            articulo_id: item.articulo_id
                        })} >x</button>

                </div>
            </div>
        </div>

    );
}

export default CarritoItem;