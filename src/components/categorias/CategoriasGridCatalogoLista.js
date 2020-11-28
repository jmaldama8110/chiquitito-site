import React from "react";
import CategoriasGridCatalogoItem from './CategoriasGridCatalogoItem';


const CategoriasGridCatalogoLista = ({ productosLista }) => {

    return productosLista.map( (i)=>
        <CategoriasGridCatalogoItem
            key={i.producto_id}
            item={i}
         />
    );
}

export default CategoriasGridCatalogoLista;
