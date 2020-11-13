
import React from 'react';
import { Link } from 'react-router-dom';

import ClienteInfo from './ClienteInfo';
import Header from './Header';
import Footer from './Footer';
import BannerCarousel from './BannerCarousel';

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