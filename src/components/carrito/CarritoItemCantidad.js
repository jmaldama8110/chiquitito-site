import React, { useContext } from 'react';
import carritoContext from '../../context/carritoContext';

const CarritoItemCantidad = ({ item }) => {

    const { dispatchCarrito } = useContext(carritoContext);

    const onActualizarCantidad = (e) =>{
        
        const cantidad = e.target.value;
        const subtotal = parseFloat( e.target.value) * parseFloat(item.precio);

        const dato = {
            cantidad,
            subtotal
        }
        dispatchCarrito( {
            type: 'EDIT_CARRITO',
            articulo_id: item.articulo_id,
            dato
        })

    }

    return (
        <div>
            <input type='number' defaultValue={item.cantidad} min={1} max={99} onChange={onActualizarCantidad}></input>
        </div>
    );
}

export { CarritoItemCantidad as default };