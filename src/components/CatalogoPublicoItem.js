import React, { useEffect, useState } from 'react';

const CatalogoPublicoItem = ({ item }) => {

    const [cantidad, setCantidad] = useState('1');


    useEffect( ()=>{

    },[])

    const addArticuloCarrito = () => {

        const originalArray = JSON.parse(localStorage.getItem('carrito')); // recuperar y parsea el arreglo de localStorage
        const randId = Math.floor(Math.random() * 100);

        const subtotal = parseFloat( item.precio ) * parseFloat( cantidad ); 

        const articuloAdd = { // elemento a agregar en el carrito
            articulo_id: randId.toString(),
            nombre_producto: item.nombre_producto,
            precio: item.precio,
            cantidad,
            subtotal: subtotal.toString()
        }

        // Agrega articulo al array y guarda en el local storage
        const nuevoArray = [...originalArray, articuloAdd]
        localStorage.setItem('carrito', JSON.stringify(nuevoArray));

        setCantidad('1');

        alert('Se ha agregado el articulo!');

    }

    return (
        <div>
            <img src={`images/telas/${item.producto_id}`} ></img>
            <h3>${item.precio}</h3>
            <p> {item.nombre_producto}<br></br>
                {item.descripcion}</p>
            <input type="text" value={cantidad} onChange={(e) => setCantidad(e.target.value)}></input>
            <button
                onClick={addArticuloCarrito}
            >Al Carrito</button>
        </div>

    );
}

export default CatalogoPublicoItem;