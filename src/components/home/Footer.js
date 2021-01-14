import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className='footer bg-ligth py-5'>
        <div className='container cuadrilla cuadrilla-3'>
            <div className='politicas-condiciones'>
                <h2>Chiquitito Detalles</h2>
                 <p>
                    Emprendimiento familiar inspirado en poner a la disponibilidad de todos productos sanos para los bebés y la familia, que sean amigables con el medio ambiente, fomenten un consumo responsable y generen un beneficio social
                 </p>
                 <p>Leer <Link to='politica-privacidad'>Aquí</Link> las políticas de privacidad y <Link to='condiciones-servicio'>condiciones del servicio</Link> de chiquititodetalles.com </p>
                 </div>
            
            <nav>
                <p>Enlaces externos:</p>
                <ul>
                    <li><a href='https://google.com'>Google</a></li>
                    <li><a href='/features'>Features</a></li>
                    <li><a href='/docs'>Docs</a></li>
                </ul>
            </nav>

            <div className='social'>
                <a href='#s232'><i className='fab fa-facebook fa-2x'></i></a>
                <a href='#s23'><i className='fab fa-youtube fa-2x'></i></a>
                <a href='#s23'><i className='fab fa-twitter fa-2x'></i></a>

            </div>

        </div>
    </footer>
    
    );

export default Footer;