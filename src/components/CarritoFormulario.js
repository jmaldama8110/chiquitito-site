import React, { useState, useContext } from 'react';
import carritoContext from '../context/carritoContext';

const CarritoFormulario = () => {

    const [articulo_id, setArticuloId] = useState('');
    const [nombre_producto, setNombreProducto] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [subtotal, setSubtotal] = useState('');

    const { dispatchCarrito } = useContext(carritoContext);

    const agregarArticulo = (e) => {
        e.preventDefault();

        dispatchCarrito({
            type: 'ADD_CARRITO',
            articulo: { articulo_id, nombre_producto, precio, cantidad, subtotal }
        });

        setArticuloId('');
        setNombreProducto('');
        setPrecio('0');
        setCantidad('0');
        setSubtotal('0');

    }


    return (
        <div>
            <form onSubmit={agregarArticulo}>
                <input value={articulo_id} onChange={(e) => setArticuloId(e.target.value)} />
                <input value={nombre_producto} onChange={(e) => setNombreProducto(e.target.value)} placeholder="Escrito el nombre del producto" />
                <input value={precio} onChange={(e) => setPrecio(e.target.value)} />
                <input value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
                <input value={subtotal} onChange={(e) => setSubtotal(e.target.value)} />
                <button>Guardar</button>

            </form>

        </div>

    );



}

export default CarritoFormulario;