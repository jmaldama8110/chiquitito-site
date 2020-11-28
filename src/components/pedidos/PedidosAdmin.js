
import React from 'react';
import { Link } from 'react-router-dom';

import ClienteInfo from '../usuario/ClienteInfo';
import Header from '../home/Header';
import Footer from '../home/Footer';

const PedidosAdmin = ()=>{

    return (
        <div>
        <Header />
        
        <h3>Cerrar Pedido</h3>
            <ClienteInfo />
            <Link to='formapago'>
                <p>Pagar</p>
            </Link>
            <Link to='carrito'>
                <p>Regresar al carrito</p>
            </Link>
            <Footer/>
        </div>
    );
}

export default PedidosAdmin;