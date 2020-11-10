import React, { useState, useContext } from 'react';
import catalogoContext from '../context/catalogoContext';

const CatalogoFormulario = () => {

    const [categoria, setCategoria] = useState('');
    const [producto_id, setProductoId] = useState('');
    const [nombre_producto, setNombreProducto] = useState('');
    const [foldersource, setFolderSource] = useState('');
    const [imagecount, setImageCount] = useState('0');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [precio2, setPrecio2] = useState('');
    const [precio3, setPrecio3] = useState('');


    const { dispatchCatalogo } = useContext(catalogoContext);


    const agregarProducto = (e) => {

        e.preventDefault();

        dispatchCatalogo({
            type: 'ADD_CATALOGO',
            producto: { categoria, producto_id, nombre_producto, foldersource,imagecount, descripcion, precio,precio2,precio3 }
        });

        setCategoria('');
        setProductoId('');
        setNombreProducto('');
        setFolderSource('');
        setImageCount('1');
        setDescripcion('');
        setPrecio('');
        setPrecio2('');
        setPrecio3('');

    }

    return (
        <div>
            <form onSubmit={agregarProducto}>
                <input value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Categoria" />
                <input value={producto_id} onChange={(e) => setProductoId(e.target.value)} placeholder="Identificador unico" />
                <input value={nombre_producto} onChange={(e) => setNombreProducto(e.target.value)} placeholder="Nombre del producto" />
                <input value={foldersource} onChange={(e) => setFolderSource(e.target.value)} placeholder="Dentro de productos/folder"/>   
                <input value={imagecount} onChange={(e) => setImageCount(e.target.value)} placeholder="Cuantas thumbnails"/>   
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción del producto" />
                <input value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio"/>
                <input value={precio2} onChange={(e) => setPrecio2(e.target.value)} placeholder="Precio 2"/>
                <input value={precio3} onChange={(e) => setPrecio3(e.target.value)} placeholder="Precio 3"/>
                <button>Guardar</button>
            </form>
        </div>

    );
}

export default CatalogoFormulario;