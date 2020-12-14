import React from 'react';
import ProductosItem from './ProductosItem';

const ProductosLista = ({ productosLista }) => {

    return productosLista.map((item) =>
        <div className='productos-column'>
            <ProductosItem
                key={item.producto_id}
                item={item}
            />
        </div>
    )
}

export { ProductosLista as default };