import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => (
    <header className="header">

        <div className="content-contenedor">
            <div className="header__content">
                <Link className="header__text" to="/">
                    <img src="/chiquititodetalles-logo.png"></img>
                </Link>
                <div>
                    <input type="text" placeholder="Que estas buscando?"></input>
                    <button>Buscar</button>
                </div>
                <Link className="header__text">Mi Cuenta</Link>
                <Link className="header__text" to="/carrito">Carrito</Link>
                <Link className="header__text" to="/catalogo">Productos</Link>
            </div>

        </div>

    </header>

);


export default Header;