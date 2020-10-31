import React, { useState, useContext } from 'react';
import catalogoContext from '../context/catalogoContext';

const CatalogoFormulario = () => {

    const [producto_id, setProductoId] = useState('');
    const [nombre_producto, setNombreProducto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');


    const { dispatchCatalogo } = useContext(catalogoContext);


    const agregarProducto = (e) => {

        e.preventDefault();

        dispatchCatalogo({
            type: 'ADD_CATALOGO',
            producto: { producto_id, nombre_producto, descripcion, precio }
        });

        setProductoId('');
        setNombreProducto('');
        setDescripcion('');
        setPrecio('');

    }

    return (
        <div>
            <form onSubmit={agregarProducto}>
                <input value={producto_id} onChange={(e) => setProductoId(e.target.value)} placeholder="Escribe un identificador unico"/>
                <input value={nombre_producto} onChange={(e) => setNombreProducto(e.target.value)} placeholder="Escrito el nombre del producto"/>
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Escribe una descripción del producto"/>
                <input value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                <button>Guardar</button>
            </form>
        </div>

    );
}

export default CatalogoFormulario;