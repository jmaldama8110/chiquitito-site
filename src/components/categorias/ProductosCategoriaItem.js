import React, { useEffect, useState }     from 'react';

const ProductosCategoriaItem = ({ item }) => {
    

    const [precioLista, setPrecioLista] = useState('');
    const [cantidad, setCantidad] = useState('');

    useEffect( ()=>{
        document.getElementById("precioElemento").value = item.precio;
        setPrecioLista(item.precio);

        document.getElementById("cantidad").value = '1';
        setCantidad('1');
        
    },[])

    const addArticuloCarrito = () => {

        
        const originalArray = JSON.parse(localStorage.getItem('carrito')); // recuperar y parsea el arreglo de localStorage
        const randId = Math.floor(Math.random() * 100);

        const subtotal = parseFloat( precioLista ) * parseFloat( cantidad ); 

        const articuloAdd = { // elemento a agregar en el carrito
            articulo_id: randId.toString(),
            nombre_producto: item.nombre_producto,
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
        <div>
            <img src={`/images/productos/${item.foldersource}/${item.imagecount}.png`} alt=''></img>
            <div>
                <h2>{item.nombre_producto}</h2>
                <p>{item.descripcion}</p>
                <input type="text" id="precioElemento" value={precioLista} onChange={ (e)=>setPrecioLista(e.target.value)} disabled></input>
                <input type="text" id="cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)}></input>
                {item.categoria === 'telas' ?
                    <select name="variante" onChange={
                        (e) => {
                            switch (e.target.value) {
                                case '1':
                                    document.getElementById("precioElemento").value = item.precio;
                                    setPrecioLista(item.precio);
                                    break;
                                case '2':
                                    document.getElementById("precioElemento").value = item.precio2;
                                    setPrecioLista(item.precio2);
                                    break;
                                case '3':
                                    document.getElementById("precioElemento").value = item.precio3;
                                    setPrecioLista(item.precio3);
                                    break;
                                default:
                                    document.getElementById("precioElemento").value = item.precio;
                                    setPrecioLista(item.precio);
                            }
                        }
                    }>
                        <option value="1">1 mts</option>
                        <option value="2">1/2 mts</option>
                        <option value="3">1/4 mts</option>
                    </select>
                    :
                    <select name="variante">
                        <option value="1">Pieza</option>
                    </select>
                }

                <button
                    onClick={addArticuloCarrito}
                >Al Carrito</button>
            </div>
        </div>);


}

export default ProductosCategoriaItem;