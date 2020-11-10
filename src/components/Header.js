import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => (
    <header className="header">

        <div className="content-contenedor">
            <div className="header__content">
                <Link to="/">
                    <img src="/chiquititodetalles-logo.png"></img>
                </Link>
                <div>
                    <input type="text" placeholder="Que estas buscando?"></input>
                    <button>Buscar</button>
                </div>
                <Link to="/carrito">
                    <img src="/icons/carrito.png"></img>
                </Link>
                <Link to="/login">
                    <img src="/icons/usuario.png"></img>
                </Link>
            </div>

        </div>

    </header>

);


export default Header;