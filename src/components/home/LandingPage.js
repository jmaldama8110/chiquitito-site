import React, { useReducer, useEffect } from 'react';
import {Link} from 'react-router-dom';

import Header from './Header';

import BannerCarousel from './BannerCarousel';
import CategoriasLista from '../categorias/CategoriasLista';


export const LandingPage = () => {

    return (
        <div>
            <Header />
            <BannerCarousel />
            <div className='row'>
                <CategoriasLista />
            </div>
            <div className='contenido-centrado'>
                <p>Leer <Link to='politica-privacidad'>Aquí</Link> las políticas de privacidad y <Link to='condiciones-servicio'>condiciones del servicio</Link> de chiquititodetalles.com </p>
            </div>
        </div>
    );


}

export default LandingPage;