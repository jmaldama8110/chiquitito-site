import React, { useEffect, useState } from 'react';
import ProductoItemImgs from './ProductoItemImgs';
import Alertamsg from '../home/Alertamsg';
import CantidadInput from './CantidadInput';


const ProductoDetallePage = ({ subitem }) => {

    const [precioLista, setPrecioLista] = useState(parseFloat(subitem.precio));
    const [cantidad, setCantidad] = useState(1);
    const [subTotal, setSubtotal] = useState(parseFloat(subitem.precio * cantidad));

    const [imgTituloSeleccionado, setImgTituloSeleccioando] = useState('');

    const [alCarrito, setAlcarrito] = useState(false);


    useEffect(() => {

        // const cantidadElement = document.getElementById(`${subitem.producto_id}cantidad`);
        // cantidadElement.value = '1'

        fxOnLoadWindow();

    }, []);

    const fxOnLoadWindow = () => {

        const expandImg = document.getElementById(`${subitem.producto_id}expandedImg`);
        const imgText = document.getElementById(`${subitem.producto_id}textoImg`);

        const val = `${window.location.origin}/images/productos/${subitem.foldersource}/${subitem.imgs[0].fs}`;

        expandImg.src = val;
        imgText.innerHTML = subitem.imgs[0].titulo;
        setImgTituloSeleccioando(subitem.imgs[0].titulo);

        expandImg.parentElement.style.display = "block";

    }


    const verDetalleImg = (imgs) => {

        const expandImg = document.getElementById(`${subitem.producto_id}expandedImg`);
        const imgText = document.getElementById(`${subitem.producto_id}textoImg`);
        expandImg.src = imgs.target.src;

        imgText.innerHTML = imgs.target.alt;
        setImgTituloSeleccioando(imgs.target.alt);

        expandImg.parentElement.style.display = "block";

    }

    const fxSetSelectedValue = (e) => {

        const valor = e.target.value;

        switch (valor) {

            case '1':
                setPrecioLista(subitem.precio);
                setSubtotal(subitem.precio * cantidad)
                break;
            case '2':
                setPrecioLista(subitem.precio2);
                setSubtotal(subitem.precio2 * cantidad)
                break;
            case '3':
                setPrecioLista(subitem.precio3);
                setSubtotal(subitem.precio3 * cantidad)
                break;
            default:
                setPrecioLista(subitem.precio);
                setSubtotal(subitem.precio * cantidad)
                break;
        }


    }

    const onUpdateCantidad = (increment) => {

        const minimo = cantidad + increment;
        const price = precioLista;

        if( minimo > 0 ){
            setCantidad(minimo);
            setSubtotal( minimo * price );    
        }
    }

    const addArticuloCarrito = () => {

        const originalArray = JSON.parse(localStorage.getItem('carrito')); // recuperar y parsea el arreglo de localStorage
        const randId = Math.floor(Math.random() * 100);
        // const cantidad = document.getElementById(`${subitem.producto_id}cantidad`).value;

        const elementoVariante = document.getElementById(`${subitem.producto_id}variante`);
        const index = elementoVariante.selectedIndex;
        const unidad = elementoVariante[index].text;


        const articuloAdd = { // elemento a agregar en el carrito
            articulo_id: randId.toString(),
            nombre_producto: subitem.nombre_producto,
            imagen_titulo: imgTituloSeleccionado,
            precio: precioLista,
            cantidad,
            unidad,
            subtotal: subTotal
        }

        // Agrega articulo al array y guarda en el local storage
        let nuevoArray = [];
        if (originalArray) {
            nuevoArray = [...originalArray, articuloAdd]
        }
        else {
            nuevoArray = [articuloAdd]
        }

        localStorage.setItem('carrito', JSON.stringify(nuevoArray));
        setAlcarrito(true);

        /// devuelve el state original a la Alerta, para que desaparezca y permita volver a mostrarse
        setTimeout(() => setAlcarrito(false), 2000);

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
                        <img id={`${subitem.producto_id}expandedImg`} />
                        {
                            alCarrito ? <Alertamsg mensaje='Has agregado este producto al carrito!' tipo='green' /> :
                                <div></div>
                        }
                    </div>

                </div>

            </div>
            <div className='contenedor-producto-detalle-columnas'>
                <h1>{subitem.nombre_producto}</h1>
                <p className='price'>${precioLista}</p>
                <p>{subitem.descripcion}</p>

                {subitem.categoria === 'telas' ?
                    <select id={`${subitem.producto_id}variante`}
                        onChange={(e) => fxSetSelectedValue(e)}>

                        <option value="1">1 mts</option>
                        <option value="2">1/2 mts</option>
                        <option value="3">1/4 mts</option>
                    </select>
                    :
                    <select id={`${subitem.producto_id}variante`}
                        onChange={(e) => fxSetSelectedValue(e)}>
                        <option value="1">Pieza</option>
                    </select>
                }
                
                    <div className='cantidad-container'>
                        <div className='icono' onClick={() => onUpdateCantidad(-1)}>
                            <i className="fas fa-minus"></i>
                        </div>
                        <span>{cantidad}</span>
                        <div className='icono' onClick={() => onUpdateCantidad(+1)}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <p className='price'>${subTotal}</p>

                    <button onClick={addArticuloCarrito} className='btn btn-secondary'>Enviar al Carrito</button>

            </div>
        </div>
    );
}

export { ProductoDetallePage as default };