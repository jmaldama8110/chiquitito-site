import React, { useReducer, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
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
            
        </div>
    );


}

export default LandingPage;