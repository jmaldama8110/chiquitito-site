import React from 'react';

import Header from '../home/Header';
import ProductosItem from './ProductosItem';

const ProductosLista = ({ match }) => {

    const productos = [
        {
            categoria: "panales", producto_id: "01", nombre_producto: "Panal ecologico", foldersource: "panales",
            descripcion: "Panal ecologico materiales sinteticos y fibra de bambu",
            imgs: [
                { id: 1, fs: '1.png', titulo: 'Diseño mexicano muñeca chiapas' },
                { id: 2, fs: '2.png', titulo: 'Diseño mexico muñeca jalisco' },
                { id: 3, fs: '3.png', titulo: 'Diseño fauna chiapas' },
                { id: 4, fs: '4.png', titulo: 'Diseño mariposas mexicanas' },
                { id: 5, fs: '5.png', titulo: 'Diseño jaguar cachorro' },
            ],
            precio: "345",
            precio2: "345",
            precio3: "345"
        },
        {
            categoria: "panales", producto_id: "02", nombre_producto: "Panal ecologico", foldersource: "panales",
            descripcion: "Panal ecologico materiales sinteticos y fibra de bambu",
            imgs: [
                { id: 1, fs: '1.png', titulo: 'Estampado chiapaneca' },
                { id: 2, fs: '2.png', titulo: 'Estampado estilo jalisco' },
                { id: 3, fs: '3.png', titulo: 'Estampado fauna diversa' },
                { id: 4, fs: '4.png', titulo: 'Estampado michoacan' },
                { id: 5, fs: '5.png', titulo: 'Estampado cachorros' },
            ],
            precio: "345",
            precio2: "345",
            precio3: "345"
        },
        {
            categoria: "telas", producto_id: "03", nombre_producto: "Telas tipo pul", foldersource: "telaspul",
            descripcion: "Panal ecologico materiales sinteticos y fibra de bambu",
            imgs: [
                { id: 1, fs: '1.png', titulo: 'Nopales' },
                { id: 2, fs: '2.png', titulo: 'Nopales 2' },
                { id: 3, fs: '3.png', titulo: 'Perritos' },
                { id: 4, fs: '4.png', titulo: 'Sarape' },
                { id: 5, fs: '5.png', titulo: 'Quetzal' },
                { id: 6, fs: '6.png', titulo: 'Tortugas' },
                { id: 7, fs: '7.png', titulo: 'Tortugas 2' },
                { id: 8, fs: '8.png', titulo: 'Gatitos' },
                { id: 9, fs: '9.png', titulo: 'Calaveritas' }

            ],
            precio: "255",
            precio2: "175",
            precio3: "77"
        },

    ];

    const productosPorCategoria = productos.filter( (i) => i.categoria === match.params.tipo )

    return (
        <div>
            <Header />
            {productosPorCategoria.map((item) =>
            <div className='productos-column'>
                <ProductosItem
                    key={item.producto_id}
                    item={item}
                />
            </div>)}
        </div>
    );
}

export { ProductosLista as default };