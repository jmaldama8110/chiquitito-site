import React from 'react';

import Header from '../home/Header';
import ProductosItem from './ProductosItem';

const ProductosLista = ({ match }) => {

    const productos = [
        {
            categoria: "panales", producto_id: "01", nombre_producto: "Pañal Bolsillo Colores lisos", foldersource: "panales01",
            descripcion: "Pañal de bolsillo de colores lisos, impermeable y transpirable de tela pul y suede blanco, incluye un inserto de microfibra de 3 capas. Hay disponibles 2 diseños estampados",
            imgs: [
                { id: 1, fs: '1.jpg', titulo: 'Amarillo' },
                { id: 2, fs: '2.jpg', titulo: 'Verde claro' },
                { id: 3, fs: '3.jpg', titulo: 'Verde limon' },
                { id: 4, fs: '4.jpg', titulo: 'Celeste' },
                { id: 5, fs: '5.jpg', titulo: 'Azul claro' },
                { id: 6, fs: '6.jpg', titulo: 'Azul' },
                { id: 7, fs: '7.jpg', titulo: 'Azul Rey' },
                { id: 8, fs: '8.jpg', titulo: 'Rosa Claro' },
                { id: 9, fs: '9.jpg', titulo: 'Rosa Salmon' },
                { id: 10, fs: '10.jpg', titulo: 'Palo de rosa' },
                { id: 11, fs: '11.jpg', titulo: 'Rosa mexicano' },
                { id: 12, fs: '12.jpg', titulo: 'Morado' },
                { id: 13, fs: '13.jpg', titulo: 'Naranja' },
                { id: 14, fs: '14.jpg', titulo: 'Rojo' },
                { id: 15, fs: '15.jpg', titulo: 'Pañales lisos con numero' },
            ],
            precio: "165",
            precio2: "165",
            precio3: "165"
        },
        {
            categoria: "panales", producto_id: "02", nombre_producto: "Pañal Bolsillo Estampados", foldersource: "panales02",
            descripcion: "Pañal de bolsillo, impermeable y transpirable de tela pul y suede de colores, incluye un inserto de microfibra de 3 capas y un inserto de 2 capas de microfibra y 2 capas de velour de algodón. Los diseños son originales mexicanos que hacen honor a la diversidad biológica y cultural de México",
            imgs: [
                { id: 1, fs: '1.jpg', titulo: 'Pañal quetzal' },
                { id: 2, fs: '2.jpg', titulo: 'Pañal jaguar interior' },
                { id: 3, fs: '3.jpg', titulo: 'Pañal jaguar' },
                { id: 4, fs: '4.jpg', titulo: 'Pañal sarape' },
                { id: 5, fs: '5.jpg', titulo: 'Pañal tierra frente' },
                { id: 6, fs: '6.jpg', titulo: 'Pañal tierra interior' },
                { id: 7, fs: '7.jpg', titulo: 'Pañal Vaquita marina azul' },
                { id: 8, fs: '8.jpg', titulo: 'Pañal Vaquita marina rosa' },
                { id: 9, fs: '9.jpg', titulo: 'Pañal periodico' },
                { id: 10, fs: '10.jpg', titulo: 'Pañal periodico 2' },
                { id: 11, fs: '11.jpg', titulo: 'Pañal cactus rosa' },
                { id: 12, fs: '12.jpg', titulo: 'Pañal mariposas mexicanas' },
                { id: 13, fs: '13.jpg', titulo: 'Pañal fauna de México' },
                { id: 14, fs: '14.jpg', titulo: 'Pañal muñecas interior' }
            ],
            precio: "230",
            precio2: "230",
            precio3: "230"
        },

        {
            categoria: "telas", producto_id: "03", nombre_producto: "Tela pul diseños mexicanos", foldersource: "telas01",
            descripcion: "Tela pul impermeable y transpirable. Composición poliester con recubrimiento de TPU, Certificación OEKO-TEX. Se vende en 3 presentaciones: por metro de 150 cm de ancho,  medio metro y 150 cm de ancho y por cuarto de 75 x 50 cm",
            imgs: [
                { id: 1, fs: '1.jpg', titulo: 'Pul fauna de méxico' },
                { id: 2, fs: '2.jpg', titulo: 'Pul Cactus azul' },
                { id: 3, fs: '3.jpg', titulo: 'Pul cactus rosa' },
                { id: 4, fs: '4.jpg', titulo: 'Pul perritos' },
                { id: 5, fs: '5.jpg', titulo: 'Pul quetzales' },
                { id: 6, fs: '6.jpg', titulo: 'Pul vaquita marina rosa' },
                { id: 7, fs: '7.jpg', titulo: 'Pul vaquita marina azul' },
                { id: 8, fs: '8.jpg', titulo: 'Pul gatos azul' },
                { id: 9, fs: '9.jpg', titulo: 'Pul jaguar reverso' },
                { id: 10,fs: '10.jpg', titulo: 'Pul Jaguar' },
                { id: 11, fs: '11.jpg', titulo: 'Pul tacos' },
                { id: 12, fs: '12.jpg', titulo: 'Pul dibujos niños cerca' },
                { id: 13, fs: '13.jpg', titulo: 'Pul dibujos niños' },
                { id: 14, fs: '14.jpeg', titulo: 'Pul alebrijes 2' },
                { id: 15, fs: '15.jpg', titulo: 'Pul alebrijes' },
                { id: 16, fs: '16.jpeg', titulo: '13 pul muñecas 2' },
                { id: 17, fs: '17.jpg', titulo: 'Pul muñecas' },
                { id: 18, fs: '18.jpg', titulo: 'Pul periodico 2' },
                { id: 19, fs: '19.jpg', titulo: 'Pul periodico' },
                { id: 20,fs: '20.jpeg', titulo: 'Pul mariposas mexicanas 2' },
                { id: 21, fs: '21.jpg', titulo: 'Pul calaveras 2' },
                { id: 22, fs: '22.jpg', titulo: 'Pul piñatas' },
                { id: 23, fs: '23.jpg', titulo: 'Pul escamas' },
                { id: 24, fs: '24.jpg', titulo: 'Pul sarape' },
                { id: 25, fs: '25.jpg', titulo: 'Pul mariposa monarca' },
                { id: 26, fs: '26.jpg', titulo: 'Pul Tierras' },
                { id: 27, fs: '27.jpg', titulo: 'Pul loteria' },
                { id: 28, fs: '28.jpg', titulo: 'Pul lunas' },
                { id: 29, fs: '29.jpg', titulo: 'Pul aguacate' },
                { id: 30,fs: '30.jpg', titulo: 'Pul papel picado' },
                { id: 31,fs: '31.jpg', titulo: 'Pul sandía' },
                { id: 32,fs: '32.jpg', titulo: 'Pul tenangos' },
                { id: 33,fs: '33.jpeg', titulo: 'Principito' },
                { id: 34,fs: '34.jpeg', titulo: 'Gatos circulos' }
            ],
            precio: "280",
            precio2: "145",
            precio3: "78"
        },
        {
            categoria: "telas", producto_id: "04", nombre_producto: "Tela pul estampados mix", foldersource: "telas02",
            descripcion: "Tela pul impermeable y transpirable. Composición poliester con recubrimiento de TPU, Certificación OEKO-TEX. Se vende por pliego de 8 diseños, cada pliego mide 98 x 152 cm y cada diseño al interior mide 37.5 x 49 cm",
            imgs: [
                { id: 1,fs: '1.png', titulo: 'Pul mix 1' },
                { id: 2,fs: '2.png', titulo: 'Pul mix 2' },
                { id: 3,fs: '3.png', titulo: 'Pul mix 3' }
            ],
            precio: "350",
            precio2: "350",
            precio3: "350"
        },
        {
            categoria: "telas", producto_id: "05", nombre_producto: "Tela laminada ", foldersource: "telas06",
            descripcion: "Tela con laminado impermable y transpirable de 150 cm de ancho",
            imgs: [
                { id: 1,fs: '1.jpg', titulo: 'Tela laminada azul rey' },
            ],
            precio: "155",
            precio2: "90",
            precio3: "0"
        },
        {
            categoria: "telas", producto_id: "06", nombre_producto: "Velour de algodón", foldersource: "telas12",
            descripcion: "Composición 80% algodón, 20% poliester, ancho 180 cm",
            imgs: [
                { id: 1,fs: '1.jpg', titulo: 'Velour algodon' },
            ],
            precio: "265",
            precio2: "135",
            precio3: "0"
        },
        {
            categoria: "telas", producto_id: "07", nombre_producto: "Suede de 140 cm ancho", foldersource: "telas25",
            descripcion: "Tela suede siempre seco de 140 cm de ancho, solo disponible en color azul marino, gris y blanco",
            imgs: [
                { id: 1,fs: '1.jpg', titulo: 'Suede gris' },
                { id: 2,fs: '2.jpg', titulo: 'Suede blanco' },
            ],
            precio: "135",
            precio2: "75",
            precio3: "0"
        },
        {
            categoria: "telas", producto_id: "08", nombre_producto: "Suede 160cm ancho", foldersource: "telas26",
            descripcion: "Tela suede siempre seco de 160 cm de ancho, discponible en colore surtidos",
            imgs: [
                { id: 1,fs: '1.jpg', titulo: 'Suede verde jade' },
                { id: 2,fs: '2.jpg', titulo: 'Suede azul cielo' },
            ],
            precio: "135",
            precio2: "75",
            precio3: "0"
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