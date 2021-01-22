import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div className='navbar'>
            <div className='container flexible'>
                <img src="/chiquititodetalles-logo.png" alt=''></img>
                <div className='menu'>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><a>Productos</a>
                            <div className='submenu-productos'>
                                <ul>
                                    <li><Link to='/categorias/panales'>Pañales y Toallas</Link></li>
                                    <li><Link to='/categorias/telas'>Telas e Insumos</Link></li>
                                    <li><Link to='/categorias/otros'>Otros</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to='/categorias/cursos'>Cursos</Link></li>
                        <li><Link to='/contacto'>Ubicación</Link></li>
                    </ul>
                </div>
                <Link to='/carrito'>
                    <img src='/icons/carrito-de-compras.png' width="40" height="40"></img>
                </Link>

            </div>
        </div>

    );



}


export default Header;