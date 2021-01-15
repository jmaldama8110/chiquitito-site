import React, { useEffect, useState } from 'react';
import ProductoItemImgs from './ProductoItemImgs';
import Alertamsg from '../home/Alertamsg';

const ProductoDetallePage = ({ subitem, cerrarModal }) => {

    const [precioLista, setPrecioLista] = useState('');
    const [subTotal, setSubtotal] = useState(0);

    const [imgTituloSeleccionado, setImgTituloSeleccioando] = useState('');

    const [alCarrito, setAlcarrito] = useState(false);
    

    useEffect(() => {

        setPrecioLista(subitem.precio);
        setSubtotal(subitem.precio);
        
        const cantidadElement = document.getElementById(`${subitem.producto_id}cantidad`);
        cantidadElement.value = '1'

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
                setSubtotal(subitem.precio)
                break;
            case '2':
                setPrecioLista(subitem.precio2);
                setSubtotal(subitem.precio2)
                break;
            case '3':
                setPrecioLista(subitem.precio3);
                setSubtotal(subitem.precio3)
                break;
            default:
                setPrecioLista(subitem.precio);
                setSubtotal(subitem.precio)
                break;
        }


    }

    const onChangeCantidad = () => {

        const cantidad = document.getElementById(`${subitem.producto_id}cantidad`).value;
        setSubtotal( parseFloat(cantidad)*precioLista );
    } 

    const addArticuloCarrito = () => {

        const originalArray = JSON.parse(localStorage.getItem('carrito')); // recuperar y parsea el arreglo de localStorage
        const randId = Math.floor(Math.random() * 100);
        const cantidad = document.getElementById(`${subitem.producto_id}cantidad`).value;

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
        if( originalArray ){
            nuevoArray = [...originalArray,articuloAdd]
        }
        else {
            nuevoArray = [articuloAdd]
        }
        
        localStorage.setItem('carrito', JSON.stringify(nuevoArray));
        setAlcarrito(true)

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
                <p className='price'>${precioLista}</p>
                <p>{subitem.descripcion}</p>


                <input type="text"
                    value={subTotal} onChange={(e) => setSubtotal(e.target.value)} disabled>
                </input>
                {subitem.categoria === 'telas' ?
                    <select id={`${subitem.producto_id}variante`}
                        onChange={(e) => fxSetSelectedValue(e)}>

                        <option value="1">1 mts</option>
                        <option value="2">1/2 mts</option>
                        <option value="3">1/4 mts</option>
                    </select>
                    :
                    <select id={`${subitem.producto_id}variante`}
                            onChange={ (e)=>fxSetSelectedValue(e)}>
                        <option value="1">Pieza</option>
                    </select>
                }
                <input type="number" id={`${subitem.producto_id}cantidad`}
                    min={1}
                    max={9}
                    onChange={onChangeCantidad}>
                </input>

                <p>{ alCarrito  ? <Alertamsg mensaje='Has agregado este articulo al carrito!' tipo='green' /> 
                                :<button onClick={addArticuloCarrito}>Al Carrito</button>  }</p>

            </div>
        </div>
    );
}

export { ProductoDetallePage as default };