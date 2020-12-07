import React, { useContext, useEffect } from "react";
import ProductosCategoriaItem from './ProductosCategoriaItem';



const ProductosCategoriaLista = ({productosLista}) => {


    return productosLista.map( (i)=>
        <ProductosCategoriaItem
            key={i.producto_id}
            item={i}
         />
    );
}

export default ProductosCategoriaLista;
