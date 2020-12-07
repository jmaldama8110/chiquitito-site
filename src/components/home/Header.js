import React from 'react';
import { Link } from 'react-router-dom';
import BusquedaInput from './BusquedaInput';

const Header = () => {

    return (
        <header className="header">
            <div className="content-contenedor">
                <div className="header__content">
                    <Link to="/">
                        <img src="/chiquititodetalles-logo.png" alt=''></img>
                    </Link>
                    <div>
                        <BusquedaInput />
                    </div>
                    <Link to="/carrito">
                        Carrito
                    </Link>
                    <Link to="/login">
                        Mi cuenta
                    </Link>
                </div>

            </div>

        </header>

    );

}


export default Header;