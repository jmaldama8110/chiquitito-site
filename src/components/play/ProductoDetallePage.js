import React, { useEffect, useState } from 'react';
import ProductoItemImgs from './ProductoItemImgs'

const ProductoDetallePage = ({ subitem }) => {

    const [precioLista, setPrecioLista] = useState('');
    const [cantidad, setCantidad] = useState('');


    useEffect(() => {

        document.getElementById(`${subitem.producto_id}precioElemento`).value = subitem.precio;
        setPrecioLista(subitem.precio);

        document.getElementById(`${subitem.producto_id}cantidad`).value = '1';
        setCantidad('1');

        fxOnLoadWindow();

    }, []);

    const fxOnLoadWindow = () => {
        
        const expandImg = document.getElementById(`${subitem.producto_id}expandedImg`);
        const imgText = document.getElementById(`${subitem.producto_id}textoImg`);

        const val = `${window.location.origin}/images/productos/${subitem.foldersource}/${subitem.imgs[0].fs}`;

        expandImg.src = val;
        imgText.innerHTML = subitem.imgs[0].titulo;

        expandImg.parentElement.style.display = "block";

    }


    const verDetalleImg = (imgs) => {

        // Get the expanded image
        const expandImg = document.getElementById(`${subitem.producto_id}expandedImg`);
    
        // Get the image text
        const imgText = document.getElementById(`${subitem.producto_id}textoImg`);

        // Use the same src in the expanded image as the image being clicked on from the grid
        expandImg.src = imgs.target.src;

        // Use the value of the alt attribute of the clickable image as text inside the expanded image
        imgText.innerHTML = imgs.target.alt;
        // Show the container element (hidden with CSS)
        expandImg.parentElement.style.display = "block";



    }
    const fxSetSelectedValue = (valor) => {

        switch (valor) {

            case '1':
                document.getElementById(`${subitem.producto_id}precioElemento`).value = subitem.precio;
                setPrecioLista(subitem.precio);
                break;
            case '2':
                document.getElementById(`${subitem.producto_id}precioElemento`).value = subitem.precio2;
                setPrecioLista(subitem.precio2);
                break;
            case '3':
                document.getElementById(`${subitem.producto_id}precioElemento`).value = subitem.precio3;
                setPrecioLista(subitem.precio3);
                break;
            default:
                document.getElementById(`${subitem.producto_id}precioElemento`).value = subitem.precio;
                setPrecioLista(subitem.precio);
        }

    }

    const addArticuloCarrito = () => {

        const originalArray = JSON.parse(localStorage.getItem('carrito')); // recuperar y parsea el arreglo de localStorage
        const randId = Math.floor(Math.random() * 100);

        const subtotal = parseFloat(precioLista) * parseFloat(cantidad);

        const articuloAdd = { // elemento a agregar en el carrito
            articulo_id: randId.toString(),
            nombre_producto: subitem.nombre_producto,
            precio: precioLista,
            cantidad,
            subtotal: subtotal.toString()
        }

        // Agrega articulo al array y guarda en el local storage
        const nuevoArray = [...originalArray, articuloAdd]
        localStorage.setItem('carrito', JSON.stringify(nuevoArray));


        alert('Se ha agregado el articulo!');

    }


    return (
        <div className='contenedor-producto-detalle-general'>
            <div className='contenedor-producto-detalle-columnas'>
                <div className='contenedor-producto-detalle'>
                    <div className='fila-tab'>
                        <ProductoItemImgs imgItem={subitem} fxOnClickExplorarImagen={verDetalleImg} />
                    </div>

                    <div className='contenedor-tab'>
                        <div id={`${subitem.producto_id}textoImg`}> </div>
                        <img id={`${subitem.producto_id}expandedImg`} style={{ width: '100%' }} />

                    </div>

                </div>

            </div>
            <div className='contenedor-producto-detalle-columnas'>
                <h1>{subitem.nombre_producto}</h1>
                <p className='price'>${subitem.precio}</p>
                <p>{subitem.descripcion}</p>


                <input type="text" id={`${subitem.producto_id}precioElemento`} value={precioLista} onChange={(e) => setPrecioLista(e.target.value)} disabled></input>
                <input type="text" id={`${subitem.producto_id}cantidad`} value={cantidad} onChange={(e) => setCantidad(e.target.value)}></input>
                {subitem.categoria === 'telas' ?
                    <select name="variante"
                        onChange={(e) => fxSetSelectedValue(e.target.value)}>

                        <option value="1">1 mts</option>
                        <option value="2">1/2 mts</option>
                        <option value="3">1/4 mts</option>
                    </select>
                    :
                    <select name="variante">
                        <option value="1">Pieza</option>
                    </select>
                }


                <p><button onClick={addArticuloCarrito}>Al Carrito</button></p>


            </div>
        </div>
    );
}

export { ProductoDetallePage as default };