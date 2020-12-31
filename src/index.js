import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './router/AppRouter';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';

import './styles/styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const usuarios = {
//     usuario_facebook_id: '1',
//     nombre: 'jose',
//     apellidos: 'gomez',
//     fecha_alta: '2020-12-12'

// }

// const pedidos = {
//     pedido_id: '2',
//     usuario_ref: 'wk3928d3',
//     fecha_pedido: '2020-12-31',
//     total: '650',
//     envio: '180',
//     forma_pago: 'oxxo',
//     direccion: 'flamboyant 150',
//     codigo_postal: '29040',
//     ciudad: 'tuxtla',
//     estado: 'chiapas',
//     numero_celular: '9612338665',
//     estatus: 'A',
//     last_update: '2020-12-31'

// }


// const articulos = {
//     producto_id: '1',
//     pedido_ref: 'd23h784h3',
//     nombre: 'inserto bambu',
//     estampa_colo: 'blanco',
//     medida: 'pza',
//     precio_base: '140',
//     cantidad: '1',
//     total: '140'
// }

// db.ref('usuarios').push(usuarios).then(() => console.log('Usuario guardado!'))
//     .catch((e) => console.log('error:', e));

// db.ref('pedidos').push(pedidos).then(() => console.log('Pedido guardado!'))
//     .catch((e) => console.log('error:', e));

// db.ref('pedidos_items').push(articulos).then(() => console.log('Articulos guardados!'))
//     .catch((e) => console.log('error:', e));


ReactDOM.render(<AppRouter />, document.getElementById('root'));

//------ Change to play mode 2------

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


