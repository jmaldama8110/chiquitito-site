import React from 'react';
import { Link } from 'react-router-dom';
//import BusquedaInput from './BusquedaInput';
import Navbar from './Navbar';

const Header = () => {

    return (
        <header className="header">
            <div className="content-contenedor">
                <div className="header__content">
                    <Link to="/">
                        <img src="/chiquititodetalles-logo.png" alt=''></img>
                    </Link>
                    <Navbar />
                    <Link to="/carrito">
                        <img src='/icons/carrito-de-compras.png' width="50" height="50"></img>
                    </Link>
                </div>

            </div>
            

        </header>

    );

}


export default Header;