import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='container flexible'>
                <nav>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/categorias/panales'>Pañales & Toallas</Link></li>
                        <li><Link to='/categorias/telas'>Telas & Insumos</Link></li>
                        <li><Link to='/categorias/cursos'>Cursos</Link></li>
                        <li><Link to='/categorias/otros'>Otros</Link></li>
                    </ul>
                </nav>
            </div>

        </div>
    );
}

export { Navbar as default };