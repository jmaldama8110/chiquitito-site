import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => (
    <header className="header">

        <div className="content-contenedor">
            <div className="header__content">
                <Link to="/">
                    <img src="/chiquititodetalles-logo.png" alt=''></img>
                </Link>
                <div>
                    <input type="text" placeholder="Que estas buscando?"></input>
                   
                </div>
                <Link to="/carrito">
                    <img src="/icons/carrito.png" alt=''></img>
                </Link>
                <Link to="/login">
                    <img src="/icons/usuario.png" alt=''></img>
                </Link>
            </div>

        </div>

    </header>

);


export default Header;