import React     from 'react';
import CatalogoImagesLista from './CatalogoImagesLista';


const CategoriasGridCatalogoItem = ({ item }) => {


    return (
        <div>
            <img src={`/images/productos/${item.foldersource}/01.png`} alt=''></img>
            <div>
                <h2>{item.nombre_producto}</h2>
                <p>{item.descripcion}</p>
                <input type="text" id="precioElemento" value={item.precio} disabled></input>
                <input type="text" />
                {item.categoria === 'telas' ?
                    <select name="variante" onChange={
                        (e) => {
                            switch (e.target.value) {
                                case '1':
                                    document.getElementById("precioElemento").value = item.precio
                                    break;
                                case '2':
                                    document.getElementById("precioElemento").value = item.precio2
                                    break;
                                case '3':
                                    document.getElementById("precioElemento").value = item.precio3
                                    break;
                                default:
                                    document.getElementById("precioElemento").value = item.precio
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

                <button>Al Carrito</button>
            </div>
        </div>);


}

export default CategoriasGridCatalogoItem;