
import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../home/Header';



const PedidoRegistro = () => {

    const nombre = 'JoseMan';
    const numeroPedido = 12283934;

    return (

        <div>
            <Header />
            <div className='contenido-centrado'>
                <h1>Chiquitito Detalles</h1>
                <h3>Gracias {nombre}!</h3>

                <h3>Numero de pedido es: {numeroPedido}</h3>
                <Link to="/">
                    <p>Regresar a la tienda</p>
                </Link>

            </div>

        </div>
    );
}

export default PedidoRegistro;